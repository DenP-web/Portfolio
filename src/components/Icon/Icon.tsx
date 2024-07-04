import React from "react";
import sprite from '/sprite.svg'

interface IconProps {
  id: string
}

const Icon: React.FC<IconProps> = ({id}) => {
  return (
    <svg className="icon">
      <use href={`${sprite}#${id}`}></use>
    </svg>
  );
};

export default Icon;
