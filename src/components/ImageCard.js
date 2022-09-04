import React from "react";

function ImageCard() {
    return (
        <div className="justify-self-center bg-[url('/src/assets/africa.jpeg')] w-[160px] h-[200px] rounded-lg bg-cover">
            <div className="ml-2 mt-36">
                <h1 className="font-medium text-[#FFFF]">Olowookere Joel</h1>
                <p className="text-sm font-small text-[#FFFF]">Ogun, Nigeria</p>
            </div>
        </div>
    )
}

export default ImageCard