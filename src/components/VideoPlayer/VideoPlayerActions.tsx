import { Comments, Heart, Share } from "../Icons";
import { FC } from 'react';

interface Props {
    avatar: string;
    comments: number;
    likes: number;
    shares: number;
    hearted?: boolean;
}


export const VideoPlayerActions:FC<Props> = ({ comments, likes, shares, avatar, hearted = false }) => {

    const handleHeart = () => {
        alert('Heart')
    }

    const handleComment = () => {
        alert('Comment')
    }

    const handleShare = () => {
        alert('Share')
    }



    return (
        <aside className="absolute bottom-24 right-4">
            <div className="text-center mb-4" onClick={handleHeart}>
                <Heart fill="#fff" />
                <strong title="like">{likes}</strong>
            </div>
            <div className="text-center mb-4" onClick={handleComment}>
                <Comments fill="#fff" />
                <strong title="comments">{comments}</strong>
            </div>
            <div className="text-center mb-4" onClick={handleShare}>
                <Share fill="#fff" />
                <strong title="share">{shares}</strong>
            </div>
        </aside>
    )
}