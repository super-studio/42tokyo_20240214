import fs from 'fs/promises';

const hashtags = ['ふつうのマヨネーズ', 'ふつうのケチャップ', 'ふつうの塩', 'ふつうのドレッシング'];

async function analyzePostsDataForHashtag(hashtag) {
    try {
        // 各ハッシュタグに対応するファイル名を指定
        const filename = `./public/data/${hashtag}_posts.json`;
        const data = JSON.parse(await fs.readFile(filename, 'utf-8'));
        const posts = data.data;

        // 統計情報を計算
        const totalPosts = posts.length;
        const totalLikes = posts.reduce((acc, post) => acc + (post.like_count || 0), 0);
        const totalComments = posts.reduce((acc, post) => acc + (post.comments_count || 0), 0);
        const averageLikes = totalLikes / totalPosts;
        const averageComments = totalComments / totalPosts;

        // 統計情報をログに出力
        console.log(`[${hashtag}] 総投稿数: ${totalPosts}`);
        console.log(`[${hashtag}] 総いいね数: ${totalLikes}`);
        console.log(`[${hashtag}] 総コメント数: ${totalComments}`);
        console.log(`[${hashtag}] 平均いいね数: ${averageLikes.toFixed(2)}`);
        console.log(`[${hashtag}] 平均コメント数: ${averageComments.toFixed(2)}`);

        // 統計情報をJSONファイルに保存
        const analysisData = {
            totalPosts,
            totalLikes,
            totalComments,
            averageLikes: averageLikes.toFixed(2),
            averageComments: averageComments.toFixed(2)
        };
        await fs.writeFile(`./public/data/${hashtag}_analysis.json`, JSON.stringify(analysisData, null, 2));
        console.log(`[${hashtag}] Analysis data saved to ${hashtag}_analysis.json`);
    } catch (error) {
        console.error(`[${hashtag}] データの分析中にエラーが発生しました:`, error);
    }
}

async function analyzePostsDataForAllHashtags() {
    for (const hashtag of hashtags) {
        await analyzePostsDataForHashtag(hashtag);
    }
}

analyzePostsDataForAllHashtags();


