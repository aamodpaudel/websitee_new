"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImagePropsType {
  images: ImageType[];
}

interface ImageType {
  src: string;
  alt: string;
}

const ImgGallery: React.FC<ImagePropsType> = ({ images }) => {
  return (
    <div className="overflow-hidden py-6 relative max-w-6xl mx-auto">
      <motion.div
        className="flex space-x-6 w-max"
        animate={{ x: [0, -800] }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        {images.concat(images).map((image, index) => (
          <div key={index} className="relative group">
            <Image
              src={image.src}
              alt={image.alt}
              className="w-auto h-10 md:h-14"
              width={300}
              height={200}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImgGallery;
