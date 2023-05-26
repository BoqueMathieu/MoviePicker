import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/counterSlice';
import ImageComponent from './Image';
const BubbleFilm = ({ headerClick , updateHeader,imgSrc, description,title }) => {
  const count = useSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();

 const setHeaderInfos =() => {
  updateHeader(draft => {
    draft.title = title ,
    draft.description = description ,
    draft.imgSrc = imgSrc ,
    draft.headerClick = false
  },

  dispatch(increment())
  
 )}

  return (
    <>

   

{headerClick ? <div
 onClick={() => {
  setHeaderInfos()
      }} 
    className="cursor-pointer bg-white-950	rounded border-double border-4 border-slate-400">
      <h2 className="w-20 mt-5 text-slate-100	ml-10 "> {title}</h2>
      <ImageComponent imageUrl={imgSrc} headerClick={headerClick} />
      <h1 className="line-clamp-1  mt-5 text-slate-400	ml-10 ">  {description}</h1>


    </div> : <div 
    className="bg-white-950	rounded border-double border-4 border-slate-400">
      <h2 className="w-20 mt-5 text-slate-100	ml-10 "> {title}</h2>
      <ImageComponent imageUrl={imgSrc} headerClick={headerClick} />
      <h1 className="mt-5 text-slate-400	ml-10 ">  {description}</h1>


    </div>}

</>
  );
};

export default BubbleFilm;
