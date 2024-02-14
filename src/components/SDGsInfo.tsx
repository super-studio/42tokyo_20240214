// src/components/SDGsInfo.tsx

import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const SDGsInfo: React.FC = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', marginTop: '30px' }}>
      <CardMedia
        component="img"
        height="330"
        image="https://github.com/kknowk/kknowk/assets/131352588/419f903e-a45d-4d4a-b9af-4058f3b51c0e"
        alt="SDGs Goal"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          SDGsの3番
        </Typography>
        <Typography variant="body2" color="text.secondary">
        あらゆる年齢のすべての人々の健康的な生活を確保し、福祉を促進する。
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SDGsInfo;
