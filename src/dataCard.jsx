import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import * as React from 'react';
export default function DataCard({data}){

return (
   
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      
        <CardContent>
         
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {data}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  );

}



