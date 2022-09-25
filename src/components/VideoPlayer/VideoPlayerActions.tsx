import { Comments, Heart, Share } from "../Icons";
import { FC } from 'react';

interface Props {
    comments?: number,
    likes?: number,
    shares?: number,
    hearted?: boolean
}


export const VideoPlayerActions:FC<Props> = ({ comments = 80, likes = 10000, shares = 39, hearted = false }) => {

    return (
        <aside className="absolute bottom-4 right-4">
            <div className="text-center">
                <Heart fill="#fff" />
                <strong title="like">{likes}</strong>
            </div>
            <div className="text-center">
                <Comments fill="#fff" />
                <strong title="comments">{comments}</strong>
            </div>
            <div className="text-center">
                <Share fill="#fff" />
                <strong title="share">{shares}</strong>
            </div>
        </aside>
    )
}