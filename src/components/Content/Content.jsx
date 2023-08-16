import React, { useEffect } from 'react';
import './Content.css'
import RandomColor from 'randomcolor';
import cssScrollSnapPolyfill from 'css-scroll-snap-polyfill';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {books} from '../../data'

const Content = () => {
  useEffect(() => {
    const init = () => {
      const items = document.querySelectorAll('section');
      for (let i = 0; i < items.length; i++) {
        items[i].style.background = RandomColor({ luminosity: 'light' });
      }
      cssScrollSnapPolyfill();
    };

    init();
  }, []);

  console.log(books[0])
  return (
    <>
    {books.map((book) => {
        const { id, img, title, buy, select } = book;
        return (
          <section key={id} >
            <Header />
            <img src={img} alt={title}/>
            <div className='buy-book'> 
            <h1>{title}</h1>
            {/** <p>{buy}</p>
            <span> Selected : {select}</span>
            */}
            </div>
            <Footer />
          </section>
        );
      })}
    
      
    </>
  );
};

export default Content;
