import { VideoPlayer } from "../VideoPlayer"

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
        src: 'https://v16m-default.tiktokcdn-us.com/77388cd0c4e95eee2d35b3962861e0fc/632ff740/video/tos/useast2a/tos-useast2a-pve-0068/674f05afd0994524ba509cbb20e5c520/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2824&bt=1412&cs=0&ds=3&ft=eXWR6H-qMyq8ZDfrfhe2NjQNfl7Gb&mime_type=video_mp4&qs=0&rc=OGUzNDZmOzg1ZztlZDdoZEBpM3Q1aTM6ZjM7ZjMzNzczM0A1LS1hYV80XjYxYGEyYF82YSNzYWgxcjRvMDNgLS1kMTZzcw%3D%3D&l=202209250036407F457FB7A711AE72664E'
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
        src: 'https://v16m-webapp.tiktokcdn-us.com/1c23bc40306d0a0c6124e0eedd90c015/6330117c/video/tos/useast2a/tos-useast2a-ve-0068c003/661fa0b945e4439b95f76e0c58f6665d/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2948&bt=1474&cs=0&ds=3&ft=ebtHKH-qMyq8ZtkXfhe2N3tGfl7Gb&mime_type=video_mp4&qs=0&rc=O2c5NWY4PGQ3Ojk4Nzs0N0BpanA1ZTs6Znd1ZjMzNzczM0AxXi0uYzIyX2MxMjIuLTY2YSNnLV4zcjRvbGpgLS1kMTZzcw%3D%3D&l=2022092502294296280E16EC79EA7A844A'
    },
    
]


export const FeedVideos = () => {

    return (
        <>
        {
            VIDEOS.map(video => 
                <div className="snap-center">
                    <VideoPlayer key={video.id} {...video} />
                </div>
            )
        }
        </>
    )
}





// person
// <svg width="1em" height="1em" viewBox="0 0 48 48" fill="#000" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0001 11.5C20.9625 11.5 18.5001 13.9624 18.5001 17C18.5001 20.0376 20.9625 22.5 24.0001 22.5C27.0377 22.5 29.5001 20.0376 29.5001 17C29.5001 13.9624 27.0377 11.5 24.0001 11.5ZM15.5001 17C15.5001 12.3056 19.3057 8.5 24.0001 8.5C28.6945 8.5 32.5001 12.3056 32.5001 17C32.5001 21.6944 28.6945 25.5 24.0001 25.5C19.3057 25.5 15.5001 21.6944 15.5001 17ZM24.0001 30.5C19.1458 30.5 15.0586 33.7954 13.8578 38.2712C13.7147 38.8046 13.2038 39.1741 12.6591 39.0827L11.6729 38.9173C11.1282 38.8259 10.7571 38.3085 10.8888 37.7722C12.3362 31.8748 17.6559 27.5 24.0001 27.5C30.3443 27.5 35.664 31.8748 37.1114 37.7722C37.2431 38.3085 36.872 38.8259 36.3273 38.9173L35.3411 39.0827C34.7964 39.1741 34.2855 38.8046 34.1424 38.2712C32.9416 33.7954 28.8544 30.5 24.0001 30.5Z"></path></svg>


// comments
{/* <svg width="1em" height="1em" viewBox="0 0 32 32" fill="#000" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"></path></svg> */}


// add video
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 75 49" width="100%" height="100%"><path fill="#D8D8D8" stroke="#979797" stroke-width="0.5" d="M.25.25h74.5v48.5H.25z" opacity="0.01"></path><path fill="#FA2D6C" fill-rule="evenodd" d="M23.5 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C29.58 10.5 31.82 10.5 36.3 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496C59 16.58 59 18.82 59 23.3v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C23.5 32.42 23.5 30.18 23.5 25.7v-2.4z" clip-rule="evenodd"></path><path fill="#20D5EC" fill-rule="evenodd" d="M16 23.3c0-4.48 0-6.72.872-8.432a8 8 0 013.496-3.496C22.08 10.5 24.32 10.5 28.8 10.5h9.9c4.48 0 6.72 0 8.432.872a8 8 0 013.496 3.496c.872 1.711.872 3.952.872 8.432v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496c-1.711.872-3.952.872-8.432.872h-9.9c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C16 32.42 16 30.18 16 25.7v-2.4z" clip-rule="evenodd"></path><rect width="36" height="28" x="19.5" y="10.5" fill="#161823" rx="8"></rect><path fill="#fff" fill-rule="evenodd" d="M37 18a.5.5 0 00-.5.5v5h-5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h5v5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-5h5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-5v-5a.5.5 0 00-.5-.5h-1z" clip-rule="evenodd"></path></svg> */}

// lupa
// <svg width="1em" height="1em" viewBox="0 0 48 48" fill="#000" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.7764 10.5C16.1265 10.5 11.5 15.172 11.5 20.993C11.5 26.814 16.1265 31.486 21.7764 31.486C24.5005 31.486 26.9782 30.4054 28.8221 28.6314C30.8097 26.7191 32.0527 24.0079 32.0527 20.993C32.0527 15.172 27.4262 10.5 21.7764 10.5ZM8.5 20.993C8.5 13.5669 14.4184 7.5 21.7764 7.5C29.1344 7.5 35.0527 13.5669 35.0527 20.993C35.0527 24.2993 33.881 27.3328 31.9342 29.6817L38.3696 36.2355C38.7566 36.6296 38.7508 37.2627 38.3568 37.6497L37.6432 38.3503C37.2492 38.7373 36.616 38.7315 36.2291 38.3374L29.7742 31.7638C27.5523 33.4701 24.7814 34.486 21.7764 34.486C14.4184 34.486 8.5 28.4191 8.5 20.993Z"></path></svg>


// mas simbol
{/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#RedPlusCircleColor_filter0_d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 25C20.6274 25 26 19.6274 26 13C26 6.37258 20.6274 1 14 1C7.37258 1 2 6.37258 2 13C2 19.6274 7.37258 25 14 25Z" fill="#FE2C55"></path></g><path d="M9.5 14C9.22386 14 9 13.7761 9 13.5V12.5C9 12.2239 9.22386 12 9.5 12H18.5C18.7761 12 19 12.2239 19 12.5V13.5C19 13.7761 18.7761 14 18.5 14H9.5Z" fill="white"></path><path d="M13 8.5C13 8.22386 13.2239 8 13.5 8H14.5C14.7761 8 15 8.22386 15 8.5V17.5C15 17.7761 14.7761 18 14.5 18H13.5C13.2239 18 13 17.7761 13 17.5V8.5Z" fill="white"></path><defs><filter id="RedPlusCircleColor_filter0_d" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg> */}