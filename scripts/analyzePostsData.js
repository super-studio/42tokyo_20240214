import fs from 'fs/promises';

async function analyzePostsData() {
    try {
        // JSONファイルからデータを読み込む
        const data = JSON.parse(await fs.readFile('./data/ふつうのマヨネーズ_posts.json', 'utf-8'));
        const posts = data.data;

        // 統計情報を計算
        const totalPosts = posts.length;
        const totalLikes = posts.reduce((acc, post) => acc + (post.like_count || 0), 0);
        const totalComments = posts.reduce((acc, post) => acc + (post.comments_count || 0), 0);
        const averageLikes = totalLikes / totalPosts;
        const averageComments = totalComments / totalPosts;

        // 統計情報を表示
        console.log(`総投稿数: ${totalPosts}`);
        console.log(`総いいね数: ${totalLikes}`);
        console.log(`総コメント数: ${totalComments}`);
        console.log(`平均いいね数: ${averageLikes.toFixed(2)}`);
        console.log(`平均コメント数: ${averageComments.toFixed(2)}`);

        // 統計情報をJSONファイルに保存
        const analysisData = {
            totalPosts: totalPosts,
            totalLikes: totalLikes,
            totalComments: totalComments,
            averageLikes: averageLikes.toFixed(2),
            averageComments: averageComments.toFixed(2)
        };
        await fs.writeFile('./data/postsAnalysis.json', JSON.stringify(analysisData, null, 2));
        console.log(`Analysis data saved to postsAnalysis.json`);

    } catch (error) {
        console.error('データの分析中にエラーが発生しました:', error);
    }
}

analyzePostsData();

