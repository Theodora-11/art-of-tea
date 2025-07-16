import React from 'react'
import messagesText from '../../utility'
import logo from '../assets/icon-light-theme.png'


export default function Header() {

  const [index, setIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const message = messagesText[index];  

  function nextMessage() {
    setIndex(prevIndex => prevIndex + 1);
    if(index >= messagesText.length - 1) {
      setIndex(0);
    }
  }

  function backMessage() {
    setIndex(prevIndex => prevIndex - 1);
    if(index <= 0) {
      setIndex(messagesText.length - 1);
    }
  }
  

  return(
    <header>

      <div className="wrapper-header-front">
        <div className="wrapper-messages-header">

          <button
            onClick={backMessage} 
            className="material-symbols-outlined arrow back-message"
            title="back"
          >arrow_back_ios_new</button>

          <p>{message}</p>
          <button 
            onClick={nextMessage} 
            className="material-symbols-outlined arrow next-message"
            title="next"
          >arrow_forward_ios</button>
        </div>
      </div>

      <div className="wrapper-header-middle">

        <button 
          className="input-burger" 
          data-open={open? "true" : "false"} 
          onClick={() => setOpen(prev => !prev)}
        >
          <div className='wrapper-burger'>
            <span className="line-burger line1-burger"></span>
            <span className="line-burger line2-burger"></span>
            <span className="line-burger line3-burger"></span>
          </div>

        </button>

        <div className="wrapper-logo">
          <a href="#"><img src={logo} className="logo"/></a>
          <span className="logo-text">Art of Nature</span>
        </div>

        <div className="header-right">

          <a href="/search" className="quick-search-link" title="Search">
            <div className="icon-wrapper">
              <span className="item-icon material-symbols-outlined">search</span>
              <span className="item-text">Search</span>
            </div>
          </a>

          <a href="/account" className="account-link" title="Account">
            <div className="icon-wrapper">
              <span className="item-icon material-symbols-outlined">account_circle</span>
              <span className="item-text">Account</span>
            </div>
          </a>

          <a href="/favorite" className="favorite-link" title="Account">
            <div className="icon-wrapper">
              <span className="item-icon material-symbols-outlined">favorite</span>
              <span className="item-text">Favorite</span>
            </div>
          </a>

          <a href="/cart" className="cart-link" title="Cart">
            <div className="icon-wrapper">
              <span className="item-icon material-symbols-outlined">shopping_cart</span>
              <span className="item-text">Cart</span>
            </div>
          </a>

          <a href="/cart" className="cart-link" title="Cart">
            <div className="icon-wrapper">
              <span className="item-icon material-symbols-outlined">dark_mode</span>
              <span className="item-text">Dark</span>
            </div>
          </a>

        </div>


      </div>

      <div className="collection-menu">
        <ul className="collection-list">
          <li className="collection-item">
            <a href="#">Home</a>
          </li>

          <li className="collection-item">
            <a href="#">Best Sellers</a>
          </li>

          <li className="collection-item">
            <a href="#">Teas Category</a>
          </li>

          <li className="collection-item">
            <a href="#">Western teas</a>
          </li>

          <li className="collection-item">
            <a href="#">Accessories</a>
          </li>

          <li className="collection-item">
            <a href="#">All Tea</a>
          </li>
        </ul>
      </div>
      
    </header>
  )
}