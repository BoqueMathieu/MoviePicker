import React from 'react';
import './style.css';
import { store } from './store';
import { Provider } from 'react-redux';
import Counter from './Counter';
import BubbleFilm from './BubbleFilm';
import {datas} from './datas.js';
import { useImmer } from "use-immer";

export default function App() {

  const [ header, updateHeader ] = useImmer({title : '',
    imgSrc :'' ,
    description: '',
    headerClick: false}); 

    console.log(header.title != '')
  return (
    <Provider store={store}>
      <div>
        <div >
        <h1>Bonjour!<Counter /></h1>
         {header.title != '' ? <BubbleFilm  headerClick={header.headerClick} title={header.title} imgSrc={header.imgSrc} description={header.description} /> : ''}
         </div>
          

        <div className='flex'>
        {datas.map((data) => <div className="transform h-64  w-1/5 transition
         duration-500 hover:scale-125 mr-10
         bottom-10	"> <BubbleFilm  headerClick={data.headerClick} updateHeader={updateHeader} title={data.title} imgSrc={data.imgSrc} description={data.description} /></div>)}

        </div>
      </div>

    </Provider>
  );
}
