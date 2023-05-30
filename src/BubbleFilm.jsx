import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/counterSlice';
import ImageComponent from './Image';
const BubbleFilm = ({ headerClick, updateHeader, imgSrc, description, title }) => {
  const count = useSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();

  const setHeaderInfos = () => {
    updateHeader(draft => {
      draft.title = title,
        draft.description = description,
        draft.imgSrc = imgSrc,
        draft.headerClick = false
    },

      dispatch(increment())

    )
  }

  return (
    <>



      {headerClick ? <div
        onClick={() => {
          setHeaderInfos()
        }}
        className="container  px-10 mx-0 min-w-full grid place-items-center border-double border-4 border-slate-400 text-center">

        <ImageComponent imageUrl={imgSrc} headerClick={headerClick} />
        <h2 className="text-l font-bold w-20 mt-5 text-slate-100	ml-10 "> {title}</h2>
        <h1 className="line-clamp-1  mt-5 text-slate-400	ml-10 ">  {description}</h1>


      </div> : <div
        className="container  px-10 mx-0 min-w-full grid place-items-center border-double border-4 border-slate-400 text-center">

        <div className="text-center w-96 rounded ">
          <img src={imgSrc} alt="" className="w-full" />

          <h2 className="ml-10 font-bold text-white text-xl mb-2 "> {title}</h2>
          <h1 className="mt-5 text-slate-400	ml-10 ">  {description}</h1>
        </div></div>

      }

    </>
  );
};

export default BubbleFilm;
