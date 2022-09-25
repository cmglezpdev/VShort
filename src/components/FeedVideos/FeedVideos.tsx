import { VideoPlayer } from "../VideoPlayer"

import v1 from '../../../video1.mp4';
import v2 from '../../../video2.mp4';

const VIDEOS = [
    {
        id: 1,
        author: 'ruziotaku',
        description: 'This is a video',
        likes: '10.2K',
        shares: '66',
        comments: '89',
        songTitle: 'Oklmboy1 song- No name ✪',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ddc98a1db66a53a2d973c8922700e90e~c5_100x100.jpeg?x-expires=1664244000&x-signature=6KYHFdiKGS%2BQ96MtsGPLzxqmvjM%3D',
        src: v1
        // src: 'https://v16m-default.tiktokcdn-us.com/77388cd0c4e95eee2d35b3962861e0fc/632ff740/video/tos/useast2a/tos-useast2a-pve-0068/674f05afd0994524ba509cbb20e5c520/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2824&bt=1412&cs=0&ds=3&ft=eXWR6H-qMyq8ZDfrfhe2NjQNfl7Gb&mime_type=video_mp4&qs=0&rc=OGUzNDZmOzg1ZztlZDdoZEBpM3Q1aTM6ZjM7ZjMzNzczM0A1LS1hYV80XjYxYGEyYF82YSNzYWgxcjRvMDNgLS1kMTZzcw%3D%3D&l=202209250036407F457FB7A711AE72664E'
    },
    {
        id: 2,
        author: '@karenpaniagua.pe',
        description: 'I love this song / amo esta canción  🇧🇷 😍💖 ',
        likes: '10.2K',
        shares: '66',
        comments: '89',
        songTitle: 'Oklmboy1 song- No name ✪',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ddc98a1db66a53a2d973c8922700e90e~c5_100x100.jpeg?x-expires=1664244000&x-signature=6KYHFdiKGS%2BQ96MtsGPLzxqmvjM%3D',
        src: v2
        // src: 'https://v16m-webapp.tiktokcdn-us.com/1c23bc40306d0a0c6124e0eedd90c015/6330117c/video/tos/useast2a/tos-useast2a-ve-0068c003/661fa0b945e4439b95f76e0c58f6665d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2948&bt=1474&cs=0&ds=3&ft=ebtHKH-qMyq8ZtkXfhe2N3tGfl7Gb&mime_type=video_mp4&qs=0&rc=O2c5NWY4PGQ3Ojk4Nzs0N0BpanA1ZTs6Znd1ZjMzNzczM0AxXi0uYzIyX2MxMjIuLTY2YSNnLV4zcjRvbGpgLS1kMTZzcw%3D%3D&l=2022092502294296280E16EC79EA7A844A'
    },
    
]


export const FeedVideos = () => {

    return (
        <>
        {
            VIDEOS.map(video => 
                <div className="snap-center" key={video.id}>
                    <VideoPlayer {...video} />
                </div>
            )
        }
        </>
    )
}
