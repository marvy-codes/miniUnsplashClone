import React from 'react'
import africa from "../assets/africa.jpeg"

function Modal(props) {
    return (
        <div>
            <img src={africa} alt="modal img" />
            {/* <img src={props.url} alt="modal img" /> */}
            <h1 className="font-medium text-[#FFFF]">{props.name}</h1>
            <p className="text-sm font-small text-[#FFFF]">{props.area}</p>
        </div>
    )
}

export default Modal;