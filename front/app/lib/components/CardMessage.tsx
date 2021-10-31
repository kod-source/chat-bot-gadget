import React, { FC } from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

interface Props {
  image: StaticImageData;
  title: string;
  text: string;
}

export const CardMessage: FC<Props> = (props) => {
  return (
    <>
      <CardMedia
        component='img'
        alt='green iguana'
        height='140'
        image={props.image.src}
      />
      <CardContent className='hover:opacity-70'>
        <Typography gutterBottom variant='h5' component='div'>
          {props.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {props.text}
        </Typography>
      </CardContent>
      <div className='text-center mb-4'>
        <Button
          variant='contained'
          className='static p-2 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
        >
          最適な{props.title}を知りたい方はこちら！
        </Button>
      </div>
    </>
  );
};
