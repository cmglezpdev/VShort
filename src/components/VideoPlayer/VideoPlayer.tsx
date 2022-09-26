import { FC, useEffect, useRef } from 'react';
import { useToggle } from 'react-utils-custom-hooks';
import { VideoPlayerActions, VideoDescription } from './';
import { VideoInfo } from '../../Interfaces';


export const VideoPlayer:FC<VideoInfo> = ( props ) => {

    const { src, likes, comments, shares, description, songTitle, albumCover, user } = props;
    const playerActionsProps = { likes, comments, shares, avatar: user.username };
    const playerDescriptionProps = { username: user.username, description, songTitle, albumCover };

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
        <div className='relative h-screen flex'>
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
            <VideoPlayerActions
                {...playerActionsProps}
            />
            <VideoDescription
                {...playerDescriptionProps}
            />
        </div>
    )
}