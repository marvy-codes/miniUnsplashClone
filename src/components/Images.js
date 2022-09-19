import React from "react";
import ImageCard from "./ImageCard"
import {useSelector} from 'react-redux'

function Images() {

    const { images }   = useSelector(state => state.image)

    return (
        <div className="h-[140px] max-w-screen-2xl mx-4 sm:mx-8 md:mx-12 2xl:px-[158px] 2xl:mx-auto -translate-y-6">
            <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 gap-x-[22px] gap-y-[22px] max-w-[340px] sm:max-w-xl">
                {images.map((image) => {
                    return <ImageCard 
                    key={image.cover_photo.id} 
                    name={image.cover_photo.user.instagram_username} 
                    area={image.cover_photo.user.location}
                    url={image.cover_photo.urls.small}
                    />
                })}
            </div>
        </div>
    )
}

export default Images