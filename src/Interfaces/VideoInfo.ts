
export interface VideoInfo {
    id: number;
    user: {
        username: string;
        avatar: string;
    }
    description: string;
    likes: number;
    shares: number;
    comments: number;
    songTitle: string;
    albumCover:string;
    src: string;
}