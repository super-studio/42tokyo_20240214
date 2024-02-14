import React, { useState, useEffect } from 'react';

const ProductsPostsCount = () => {
  const [analysisData, setAnalysisData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/postsAnalysis.json');
      const data = await response.json();
      setAnalysisData(data);
    };
    fetchData();
  }, []);

  if (!analysisData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ marginTop: '20px', padding: '20px', border: '1px solid', textAlign: 'center' }}>
      <h2>『ふつうのマヨネーズ』の分析結果</h2>
      <p>総投稿数: {analysisData.totalPosts}</p>
      <p>総いいね数: {analysisData.totalLikes}</p>
      <p>総コメント数: {analysisData.totalComments}</p>
      <p>平均いいね数: {analysisData.averageLikes}</p>
      <p>平均コメント数: {analysisData.averageComments}</p>
    </div>
  );
};

export default ProductsPostsCount;
