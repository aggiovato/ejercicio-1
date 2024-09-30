import { useState, useCallback } from "react";
import { ButtonsProps } from "../utils/schemas";

import letsButton from "../assets/images/letsButton.svg";
import letsButtonHover from "../assets/images/letsButtonHover.svg";
import submitButton from "../assets/images/submitButton.svg";
import submitButtonHover from "../assets/images/submitButtonHover.svg";
import cleanButton from "../assets/images/cleanButton.svg";
import cleanButtonHover from "../assets/images/cleanButtonHover.svg";

import "../styles/Buttons.css";

const Buttons = (props: ButtonsProps) => {
  const [isHove, setIsHove] = useState(false);

  const { bt_type } = props;
  console.log(bt_type);

  const bt_types = {
    lets_en: {
      normal: letsButton,
      hover: letsButtonHover,
    },

    submit_en: {
      normal: submitButton,
      hover: submitButtonHover,
    },

    clean_en: {
      normal: cleanButton,
      hover: cleanButtonHover,
    },
  };

  const currentButton =
    bt_types[bt_type as keyof typeof bt_types] || bt_types["lets_en"];

  const buttonImage = isHove ? currentButton.hover : currentButton.normal;

  const handleMouseEnter = useCallback(() => {
    setIsHove(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHove(false);
  }, []);

  return (
    <div>
      <div
        className="lets-bt justify-content-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={buttonImage} alt="Button" />
      </div>
    </div>
  );
};

export default Buttons;
