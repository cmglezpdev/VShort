import { FC, useEffect, useRef } from 'react';
import { useToggle } from 'react-utils-custom-hooks'
import { VideoPlayerActions } from './VideoPlayerActions';

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

// Corazon
{/* <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#LikeShadowColor_filter0_d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4.5C21 4.5 24 8.5 24 8.5C24 8.5 27 4.5 33 4.5C40 4.5 45 9.99998 45 17C45 25 38.4622 32.1314 32.5 37.5C28.8191 40.8144 26 43 24 43C22 43 19.101 40.7978 15.5 37.5C9.63898 32.1325 3 25 3 17C3 9.99998 8 4.5 15 4.5Z" fill="white" fill-opacity="0.9"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M4.80371 24.3995C7.17815 29.3932 11.5185 33.8538 15.4999 37.4999C19.1009 40.7978 21.9999 42.9999 23.9999 42.9999C25.9999 42.9999 28.819 40.8144 32.4999 37.4999C38.4621 32.1314 44.9999 24.9999 44.9999 16.9999C44.9999 16.8252 44.9968 16.6513 44.9906 16.4785C41.1344 27.3238 27.3575 37 23.5001 37C20.6255 37 11.2219 31.6262 4.80371 24.3995Z" fill="black" fill-opacity="0.03"></path><defs><filter id="LikeShadowColor_filter0_d" x="0.6" y="3.3" width="46.8" height="43.3" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1.2"></feOffset><feGaussianBlur stdDeviation="1.2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg> */}

// Comments
// <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.9" filter="url(#CommentShadowColor_filter0_d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.4943 35.3128C42.6 31.2 45 26.9162 45 21.928C45 11.8056 35.733 3.60001 24.2999 3.60001C12.8671 3.60001 3.6 11.8056 3.6 21.9283C3.6 32.051 13.1669 39 24.6 39V42.3569C24.6 43.4205 25.7028 44.105 26.638 43.5983C29.5598 42.015 34.9741 38.8392 38.4943 35.3128ZM14.2446 19.4564C15.8786 19.4564 17.2031 20.7714 17.2031 22.3912C17.2031 24.0142 15.8786 25.3291 14.2446 25.3291C12.6134 25.3291 11.2888 24.0142 11.2888 22.3912C11.2888 20.7714 12.6134 19.4564 14.2446 19.4564ZM27.2572 22.3912C27.2572 20.7714 25.9332 19.4564 24.3 19.4564C22.667 19.4564 21.3429 20.7714 21.3429 22.3912C21.343 24.0142 22.6671 25.3291 24.3 25.3291C25.9332 25.3291 27.2572 24.0142 27.2572 22.3912ZM34.355 19.4564C35.9887 19.4564 37.3113 20.7714 37.3113 22.3912C37.3113 24.0142 35.9888 25.3291 34.355 25.3291C32.7213 25.3291 31.3969 24.0142 31.397 22.3912C31.397 20.7714 32.7214 19.4564 34.355 19.4564Z" fill="white"></path></g><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M24.6001 38.9999C24.6001 38.9999 36.0669 38.1138 40.8601 31.9764C36.0669 38.7276 31.2737 42.4101 27.0796 43.6376C22.8855 44.8651 24.6001 38.9999 24.6001 38.9999Z" fill="url(#CommentShadowColor_paint0_linear)"></path><defs><filter id="CommentShadowColor_filter0_d" x="1.2001" y="2.40001" width="46.2" height="44.9688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1.2"></feOffset><feGaussianBlur stdDeviation="1.2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><linearGradient id="CommentShadowColor_paint0_linear" x1="20.4103" y1="37.6698" x2="22.3081" y2="43.6335" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-opacity="0.01"></stop></linearGradient></defs></svg>

// share
{/* <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.9" filter="url(#ShareShadowColor_filter0_d)"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.8 10.3085C25.8 9.04248 27.3162 8.39262 28.233 9.26572L42.1847 22.5524C43.4124 23.7216 43.3695 25.6932 42.092 26.8079L28.1867 38.9414C27.2552 39.7542 25.8 39.0926 25.8 37.8564V32.3581C25.8 32.3581 10.8695 29.6685 6.08025 38.4593C5.63374 39.2789 3.89328 39.5657 4.24706 35.4764C5.72648 27.9499 8.75001 16.1999 25.8 16.1999V10.3085Z" fill="white"></path></g><path opacity="0.03" fill-rule="evenodd" clip-rule="evenodd" d="M36.0958 16.8L38.8639 22.3362C39.3536 23.3155 39.1184 24.5021 38.2921 25.2206L25.8958 36C25.8958 36 25.2958 39 27.0958 39C28.8958 39 43.2958 25.8 43.2958 25.8C43.2958 25.8 43.8958 24 42.0958 22.2C40.2958 20.4 36.0958 16.8 36.0958 16.8Z" fill="#161823"></path><path opacity="0.09" fill-rule="evenodd" clip-rule="evenodd" d="M25.7997 16.8389V32.4389C25.7997 32.4389 11.5114 30.4255 7.03635 37.2389C2.73042 43.7949 3.12588 29.8349 9.60816 22.8829C16.0904 15.931 25.7997 16.8389 25.7997 16.8389Z" fill="url(#ShareShadowColor_paint0_radial)"></path><defs><filter id="ShareShadowColor_filter0_d" x="1.79995" y="7.66563" width="43.6786" height="35.2335" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1.2"></feOffset><feGaussianBlur stdDeviation="1.2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><radialGradient id="ShareShadowColor_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.324 42.5462) rotate(-113.046) scale(19.0955 18.771)"><stop></stop><stop offset="0.995496" stop-opacity="0.01"></stop><stop offset="1" stop-opacity="0.01"></stop></radialGradient></defs></svg> */}

// loading
// <svg preserveAspectRatio="none" viewBox="0 0 200 200" width="48" height="48" class="egmzxjy4 tiktok-7f5zag-SvgContainer-StyledLoading e1ugmybf1"><defs><mask id="redhole-1664067046477"><rect width="100%" height="100%" fill="white"></rect><circle class="tiktok-dt84ji-Circle e1ugmybf0"></circle></mask><mask id="greenhole-1664067046477"><rect width="100%" height="100%" fill="white"></rect><circle class="tiktok-nuz7yg-Circle e1ugmybf0"></circle></mask></defs><circle stroke-width="2" stroke="#3AF2FF" class="tiktok-1ibclz-Circle e1ugmybf0"></circle><circle mask="url(#redhole-1664067046477)" class="tiktok-1ie96h1-Circle e1ugmybf0"></circle><circle mask="url(#greenhole-1664067046477)" class="tiktok-162i5jd-Circle e1ugmybf0"></circle></svg>


// .tiktok-7f5zag-SvgContainer-StyledLoading {
//     display: block;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 3;
// }