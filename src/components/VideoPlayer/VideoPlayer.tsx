import { FC, useEffect, useRef } from 'react';
import { useToggle } from 'react-utils-custom-hooks'
import { VideoPlayerActions } from './';

interface Props {
    description: string,
    likes: string,
    shares: string,
    comments: string,
    songTitle: string,
    albumCover: string,
    src: string,
}


export const VideoPlayer:FC<Props> = ({ src }) => {

    const video = useRef<HTMLVideoElement>(null);
    const [playing, playingToggle] = useToggle(false);
    
    useEffect(() => {

    }, [])

    const handlePlay = () => {
        playing
            ? video.current?.pause()
            : video.current?.play()

        playingToggle();
    }

    return (
        <div className='relative'>
            <video
                ref={video} 
                // autoPlay
                // muted
                loop
                src={src} 
                onClick={handlePlay}
            />
            <i 
                className={`w-16 h-16 bg-contain bg-no-repeat bg-center bg-player absolute inset-0 m-auto ${playing && 'opacity-0'}`} 
                onClick={handlePlay}
            />
            <VideoPlayerActions />
        </div>
    )
}