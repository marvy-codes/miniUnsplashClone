import React from "react";
import { setProps, toggleModal } from "../store/toggle/toggleSlice";
import { useDispatch } from "react-redux";

function ImageCard(props) {
  const dispatch = useDispatch();

  const setModalParams = () => {
    const imgUrl = props.url;
    const name = props.name;
    const area = props.area;
    dispatch(
      setProps({
        modalImageUrl: imgUrl,
        modalUserName: name,
        modalUserLocation: area,
      })
    );
    dispatch(toggleModal());
  };

  return (
    <div
      className="justify-self-center w-[160px] h-[200px] relative z-40"
      onClick={setModalParams}
    >
      <div className="ml-2 mt-36 absolute">
        <h1 className="font-medium text-[#FFFF]">
          {props.name === null ? "No name" : props.name}
        </h1>
        <p className="text-sm font-small text-[#FFFF]">
          {props.area === null ? "Location not found" : props.area}
        </p>
      </div>
      <img
        src={props.url}
        className=" w-[160px] h-[200px] rounded-lg"
        alt="img"
      />
    </div>
  );
}

export default ImageCard;
