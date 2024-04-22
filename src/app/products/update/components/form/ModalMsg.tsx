import React from "react";

interface ModalMsgProps {
  isOpenModal: boolean;
  toggleModal: (color: string) => void;
  colorDelete: string;
  handleRemoveColor: (color: string) => void;
}

const ModalMsg: React.FC<ModalMsgProps> = ({
  isOpenModal,
  toggleModal,
  colorDelete,
  handleRemoveColor,
}) => {
  return (
    <div
      className={
        isOpenModal
          ? "flex flex-col justify-center items-center m-auto"
          : "hidden"
      }
    >
      <p className="p-4 text-lg text-center">
        Are you sure you want to remove the color?
      </p>
      <div className="flex justify-evenly max-w-80 w-full">
        <button
          title="No"
          type="button"
          className="max-w-20 w-full p-2 rounded-lg bg-secondary text-primary hover:bg-body hover:scale-105 duration-150"
          onClick={() => toggleModal("")}
        >
          No
        </button>
        <button
          title="Yes"
          type="button"
          className="max-w-20 w-full p-2 rounded-lg bg-secondary text-primary hover:bg-body hover:scale-105 duration-150"
          onClick={() => handleRemoveColor(colorDelete)}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default ModalMsg;
