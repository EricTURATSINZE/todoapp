import React from "react";

interface AvatarStackProps {
  images: string[]; // URLs of the images
  maxVisible?: number; // Maximum number of visible images
}

const AvatarStack: React.FC<AvatarStackProps> = ({
  images,
  maxVisible = 4,
}) => {
  return (
    <div className="flex items-center space-x-1">
      {images.slice(0, maxVisible).map((src, index) => (
        <div
          key={index}
          className="w-8 h-8 rounded-full overflow-hidden border-2 dark:border-gray-700"
          style={{ marginLeft: index === 0 ? "0" : "-0.5rem" }}
        >
          <img
            src={src}
            alt={`Avatar ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {images.length > maxVisible && (
        <div
          className="w-8 h-8 flex items-center justify-center bg-gray-400 dark:bg-gray-800 text-white rounded-full border-2 dark:border-gray-700 text-sm"
          style={{ marginLeft: "-0.5rem" }}
        >
          +{images.length - maxVisible}
        </div>
      )}
    </div>
  );
};

export default AvatarStack;
