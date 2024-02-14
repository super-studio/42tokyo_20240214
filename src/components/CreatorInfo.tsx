// src/components/CreatorInfo.tsx

import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface CreatorInfoProps {
  name: string;
  bio: string;
  imageUrl: string;
}

const CreatorInfo: React.FC<CreatorInfoProps> = ({ name, bio, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', marginTop: '30px' }}>
      <CardMedia
        component="img"
        height="350"
        image={imageUrl}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CreatorInfo;
