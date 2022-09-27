import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProps, toggleModal} from '../store/toggle/toggleSlice';

function Modal() {
    const { modalProps, isModalOpen }= useSelector(state => state.toggle);
    const dispatch = useDispatch();

    const clear = () => {
        dispatch(toggleModal());
        dispatch(setProps({ modalImageUrl: "", modalUserName: "", modalUserLocation: "" }));
    }
    return (
        <div className={isModalOpen ? "block fixed rounded-lg bg-white left-0 right-0 top-54 mx-auto w-4/5 md:w-[600px] max-h-1/2 z-20" : "hidden"} onClick={clear}>
            <img src={modalProps.modalImageUrl} alt="modal" className='w-full rounded-lg '/>
            <div className='ml-6 mt-2 mb-3'>
                <h1 className="font-medium text-black">{modalProps.modalUserName}</h1>
                <p className="text-sm font-small text-black">{modalProps.modalUserLocation}</p>
            </div>
        </div>
    );
};

export default Modal;