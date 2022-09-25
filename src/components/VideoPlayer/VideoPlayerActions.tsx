import { Heart } from "../Icons";


export const VideoPlayerActions = () => {

    return (
        <aside className="absolute bottom-4 right-16">
            <div className="">
                <Heart />
            </div>
            <div className="">
                <Heart fill="red" />
            </div>
            <div className="">
                <Heart />
            </div>
        </aside>
    )
}