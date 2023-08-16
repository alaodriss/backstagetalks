import React, { useEffect } from 'react';
import './Content.css'
import RandomColor from 'randomcolor';
import cssScrollSnapPolyfill from 'css-scroll-snap-polyfill';
import Header from '../Header/Header';


const Gra = (min, max) => {
  return Math.random() * (max - min) + min;
};


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

  return (
    <>
     <section>
     <Header />
            <h1>Section One</h1>
          </section>
          <section>
              <h1>Section Two</h1>
          </section>
          <section>
              <h1>Section Three</h1>
          </section>
          <section>
              <h1>Section Four</h1>
          </section>
          <section>
              <h1>Section Five</h1>
          </section>
    </>
  );
};

export default Content;
