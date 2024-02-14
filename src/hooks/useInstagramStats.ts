// src/hooks/useInstagramStats.ts
import { useState, useEffect } from 'react';

interface Stats {
  [key: string]: number;
  totalPosts: number;
  totalLikes: number;
  totalComments: number;
  averageLikes: number;
  averageComments: number;
}

interface HashtagStats {
  [key: string]: Stats;
}

const useInstagramStats = (): HashtagStats | null => {
  const [stats, setStats] = useState<HashtagStats | null>(null);

  useEffect(() => {
    const hashtags = ['ふつうのマヨネーズ', 'ふつうのケチャップ', 'ふつうの塩', 'ふつうのドレッシング'];
    const fetchStats = async () => {
      try {
        const allStats: HashtagStats = {};

        for (const hashtag of hashtags) {
          const response = await fetch(`/data/${hashtag}_analysis.json`);
          const data: Stats = await response.json();
          allStats[hashtag] = data;
        }

        setStats(allStats);
      } catch (error) {
        console.error('統計データの読み込み中にエラーが発生しました:', error);
      }
    };

    fetchStats();
  }, []);

  return stats;
};

export default useInstagramStats;
