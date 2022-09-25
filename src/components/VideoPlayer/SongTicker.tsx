import { FC } from 'react';
import Marquee from 'react-fast-marquee';
import { BsMusicNoteBeamed } from 'react-icons/bs';

interface Props {
    songTitle: string,
}

export const SongTicker:FC<Props> = ({ songTitle }) => {
  return (
    <div className='text-base flex mb-2'>
      <BsMusicNoteBeamed />
        <Marquee speed={100} gradient={false} className='ml-2 bg-transparent'>
          {songTitle}
        </Marquee>
    </div>
  )
}
