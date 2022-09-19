import React from "react";

function ImageCard(props) {
    return (
        // eslint-disable-next-line 
        <div className={"justify-self-center bg-[url('" +`${props.url}` + "')] w-[160px] h-[200px] rounded-lg  bg-cover"}>
            <div className="ml-2 mt-36">
                <h1 className="font-medium text-black">{props.name}</h1>
                <p className="text-sm font-small text-[#FFFF]">{props.area}</p>
            </div>
        </div>
    )
}

export default ImageCard