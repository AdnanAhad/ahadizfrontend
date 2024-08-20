import React from "react";
import Image from "next/image";

function ImageList() {
  return (
    <div className="relative w-80 h-96 border border-blue dark:bg-gray-900">
      <Image
        src="https://images.pexels.com/photos/5054349/pexels-photo-5054349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Post"
        layout="fill"
        objectFit="cover" // Ensures the image covers the container without distortion
        priority
      />
    </div>
  );
}

export default ImageList;
