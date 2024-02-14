import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import useInstagramStats from '../hooks/useInstagramStats';

// カテゴリ名と、それに対応するstatsのプロパティ名
const categories = [
  { label: '総投稿数', prop: 'totalPosts' },
  { label: '総いいね数', prop: 'totalLikes' },
  { label: '総コメント数', prop: 'totalComments' },
  { label: '平均いいね数', prop: 'averageLikes' },
  { label: '平均コメント数', prop: 'averageComments' }
];

const InstagramStats = () => {
  const stats = useInstagramStats();

  if (!stats) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>商品別インスタグラム統計</h2>
      {categories.map(({ label, prop }) => {
        // 各カテゴリごとにデータセットを生成
        const data = {
          labels: Object.keys(stats),
          datasets: [{
            label,
            data: Object.values(stats).map(stat => stat[prop]),
            backgroundColor: Object.keys(stats).map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2)`),
            borderColor: Object.keys(stats).map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`),
            borderWidth: 1
          }]
        };

        const options = {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        };

        return (
          <div key={label}>
            <Bar data={data} options={options} />
          </div>
        );
      })}
    </div>
  );
};

export default InstagramStats;
