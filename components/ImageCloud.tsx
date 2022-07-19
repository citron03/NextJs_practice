import React from "react";
import Image from "next/image";
import cloudSrc from "../public/images/clouds-gfc49a3f07_1280.jpg";

const ImageCloud = () => {
  return (
    <div>
      <Image src={cloudSrc} alt="cloud image"/>
    </div>
  );
};

export default ImageCloud;