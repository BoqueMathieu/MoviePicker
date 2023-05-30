import useImage from "react-hook-image";

export default function ImageComponent({ imageUrl, headerClick }) {
  const { src, status } = useImage(imageUrl, "Anonymous");

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={imageUrl} alt="" className="w-full" />
        <div className="px-6 py-4">


        </div>

      </div>
    )

  };