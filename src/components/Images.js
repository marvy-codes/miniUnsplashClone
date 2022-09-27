import React from "react";
import ImageCard from "./ImageCard";
import {useSelector} from 'react-redux';

function Images() {

    const { images, searchWord }   = useSelector(state => state.image);


    return (
        <div className="h-[140px] max-w-screen-2xl mx-4 sm:mx-8 md:mx-12 2xl:px-[128px] 2xl:mx-auto -translate-y-12">
            {searchWord.length !== 0 &&  <h1 className="text-center text-2xl font-bold text-[#545454] -translate-y-6">Search results for "{ searchWord }"</h1>}
            <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[22px] gap-y-[22px] sm:max-w-[340px] md:max-w-[640px] lg:max-w-3xl">
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
    );
};

export default Images;