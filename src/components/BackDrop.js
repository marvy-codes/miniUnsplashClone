import React from "react";
import { toggleModal, setProps,} from '../store/toggle/toggleSlice'
import { useDispatch, useSelector } from 'react-redux'

function BackDrop() {
    const dispatch = useDispatch();
    const { isModalOpen }= useSelector(state => state.toggle);
    
    const close = () => {
        dispatch(toggleModal());
        dispatch(setProps({ modalImageUrl: "", modalUserName: "", modalUserLocation: "" }));
    };

    return (
        <div className={isModalOpen ? "h-screen w-full z-20 bg-[#000000ba] fixed top-0 filter backdrop-blur-[1px]" : "hidden"} onClick={close}>
            {}
        </div>
    );
};

export default BackDrop;