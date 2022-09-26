import { FC } from 'react';
import { AlbumDisk, SongTicker } from './';

interface Props {
    username: string,
    description: string,
    albumCover: string,
    songTitle: string,
}


export const VideoDescription:FC<Props> = ({ username, description, albumCover, songTitle }) => {
    return (
        <footer className="absolute bottom-0 z-10 flex mb-4 w-full">
            <section className='w-[75%] pl-2'>
                <strong className='mb-2 block'>
                    <a href={`user/${username}`}>
                        @{ username }
                    </a>
                </strong>
                <p className='block mb-2'>{ description }</p>
                <SongTicker songTitle={songTitle} />
            </section>

            <section className='w-[25%] flex justify-center items-end'>
                <AlbumDisk albumCover={albumCover} />
            </section>
        </footer>
    )
}