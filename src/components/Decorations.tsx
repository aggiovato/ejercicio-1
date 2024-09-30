import { DecorationsProps } from "../utils/schemas";

import "../styles/Decorations.css";

const Decorations: React.FC<DecorationsProps> = ({
  imageSrc,
  width,
  height,
  top,
  left,
  right,
  bottom,
  animation,
  opacity = 1,
  rotation = 0,
  z_index = -1,
}) => {
  const style: React.CSSProperties = {
    position: "absolute",
    width: width || "100px",
    height: height || "auto",
    top: top || "auto",
    left: left || "auto",
    right: right || "auto",
    bottom: bottom || "auto",
    animation: animation || "none",
    opacity: opacity,
    transform: `rotate(${rotation}deg)`,
    zIndex: z_index,
  };

  return (
    <img
      src={imageSrc}
      style={style}
      alt="Decoration"
      className="decoration-image"
    />
  );
};

export default Decorations;
