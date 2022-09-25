import { AlbumDisk } from './';
import { FC } from 'react';

interface Props {
    author: string,
    description: string,
    albumCover: string
}


export const VideoDescription:FC<Props> = ({ author, description, albumCover }) => {
    return (
        <footer className="absolute bottom-0 z-10 flex mb-4 w-full">
            <div className='w-4/5 pl-2'>
                <strong>{ author }</strong>
                <p>{ description }</p>
            </div>

            <div className='w-1/5'>
                <AlbumDisk albumCover={albumCover} />
            </div>
        </footer>
    )
}