import useImage from "react-hook-image";

export default function ImageComponent({ imageUrl,headerClick }) {
  const { src, status } = useImage(imageUrl, "Anonymous");
  
  return status === "loading" ? <div>Loading ...</div> : headerClick ? <img src={src} className=" md:h-32 md:w-32 "  alt="alt text" /> :   <img src={src} className=" md:h-96 "  alt="alt text" /> 
};