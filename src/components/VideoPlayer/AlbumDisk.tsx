import { FC } from 'react';
import { CircleDisk } from '../Icons';

interface Props {
    albumCover: string
}

export const AlbumDisk:FC<Props> = ({ albumCover }) => {

    return (
        <div className='animate-slow-spin w-14'>
            <CircleDisk
                className=''
            />
            <img 
                src={albumCover} 
                alt="Disk-VShort" 
                className='absolute inset-0 rounded-full w-4/5 h-4/5 m-auto'
            />
        </div>
    )
}
