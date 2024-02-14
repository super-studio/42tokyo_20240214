// ESモジュールの構文を使用してaxiosをインポート
import axios from 'axios';
import fs from 'fs/promises';

const accessToken = 'EAAKP9iIX3hEBO9oS8ZAeKOy6ajilttWNmFjJ3MdZCt56HONOcnSdemjrQMO0EfcH41zgZA1Rg55HAhzCLZAiZAuAWVvpFY2TwgozuGQRHzTrea2ZAB0orPRd02Mu4ZBZC3105ZBTA8GUIaKXZCNZA1I8HzpLfaR5cZBCIKFZAmcHumxA8YLUpLjEv62OlZAr9HZCwYNTAIZD';
const userId = '17841445292986925';
const hashtags = ['ふつうのマヨネーズ', 'ふつうのケチャップ', 'ふつうの塩', 'ふつうのドレッシング']; // 例

// ハッシュタグIDに基づいて関連する投稿のデータを取得する関数
async function fetchPostsByHashtagId(hashtagId) {
    const url = `https://graph.facebook.com/v12.0/${hashtagId}/top_media?user_id=${userId}&fields=id,media_type,media_url,permalink,like_count,comments_count&access_token=${accessToken}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching posts for hashtag ID ${hashtagId}:`, error);
        return null;  // エラーが発生した場合はnullを返す
    }
}

// ハッシュタグに関連する投稿の情報を収集し、ファイルに保存するメイン関数
async function main() {
    for (const hashtag of hashtags) {
        // ハッシュタグに基づいてIDを取得
        const encodedHashtag = encodeURIComponent(hashtag);
        const searchUrl = `https://graph.facebook.com/v12.0/ig_hashtag_search?user_id=${userId}&q=${encodedHashtag}&access_token=${accessToken}`;
        try {
            const searchResponse = await axios.get(searchUrl);
            const hashtagId = searchResponse.data.data[0].id;  // ハッシュタグのIDを取得

            // ハッシュタグIDを使用して投稿の詳細を取得
            const postsData = await fetchPostsByHashtagId(hashtagId);
            if (postsData) {
                // 投稿データをファイルに保存
                await fs.writeFile(`./public/data/${hashtag}_posts.json`, JSON.stringify(postsData, null, 2));
                console.log(`Posts data for hashtag "${hashtag}" saved.`);
            }
        } catch (error) {
            console.error(`Error processing hashtag ${hashtag}:`, error);
        }
    }
}

main();