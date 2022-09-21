import React from "react";

function ImageCard(props) {
    return (
        <div className="justify-self-center w-[160px] h-[200px] relative">
            <div className="ml-2 mt-36 absolute">
                <h1 className="font-medium text-[#FFFF]">{props.name}</h1>
                <p className="text-sm font-small text-[#FFFF]">{props.area}</p>
            </div>
            <img src={props.url} className=" w-[160px] h-[200px] rounded-lg" alt="img"/>
        </div>
    )
}

export default ImageCard