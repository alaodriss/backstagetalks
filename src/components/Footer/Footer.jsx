import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='infos'> 
        <p className='description'>
        Backstage Talks is a magazine of casual, but in depth dialogues on design and business. 
        Our decisions shape and influence this complex world—to have a chance to make the right ones,
        we need to talk.
        </p>
        <span className='copyright'><a href="http://milk.sk/" target="_blank">Published by Büro Milk</a></span>
        <a href="/privacy-policy.php">Privacy Policy</a>
      </div>
      <div className='check'>
          <ul>
            <li>#books 1</li>
            <li>#books 1</li>
            <li>#books 1</li>
            <li>#books 1</li>
            <li>#books 1</li>
          </ul>
      </div>

    </div>
    
    </>
  )
}

export default Footer