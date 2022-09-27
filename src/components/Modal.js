import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProps, toggleModal } from "../store/toggle/toggleSlice";

function Modal() {
  const { modalProps, isModalOpen } = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  const clear = () => {
    dispatch(toggleModal());
    dispatch(
      setProps({ modalImageUrl: "", modalUserName: "", modalUserLocation: "" })
    );
  };
  return (
    <div
      className={
        isModalOpen
          ? "block fixed rounded-lg bg-white left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 mx-auto w-4/5 md:w-[600px] max-h-1/2 z-20 flex flex-col"
          : "hidden"
      }
      onClick={clear}
    >
      <div>
        <img
          src={modalProps.modalImageUrl}
          alt="modal"
          className="w-full rounded-lg "
        />
        <div className="ml-6 mt-2 mb-3">
          <h1 className="font-medium text-black">{modalProps.modalUserName === null ? "User not found" : modalProps.modalUserName}</h1>
          <p className="text-sm font-small text-black">
            {modalProps.modalUserLocation === null ? "Location not found" : modalProps.modalUserLocation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
