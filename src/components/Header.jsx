import React from 'react'
import messagesText from '../utils/messagesHeaderText'
import logoLight from '../assets/icon-light-theme.png'
import logoDark from '../assets/logo.png'
import { useContext } from 'react'
import { Theme } from '../Context/Theme'
import MessagesTop from './MessagesTop' 
import PhoneMenu from './PhoneMenu'


export default function Header() {
  const { themeMod, toggleTheme } = useContext(Theme);
  const [index, setIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [showPhoneMenu, setShowPhoneMenu] = React.useState(false);
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

  function getPhoneMenu() {
    setOpen(!open);
    setShowPhoneMenu(!showPhoneMenu);
    if(!open) { 
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  

  return(
    <header>
      <MessagesTop 
        backMessage={backMessage}
        message={message}
        nextMessage={nextMessage}
      />

      <div className="wrapper-header-middle">

        <button 
          className="input-burger" 
          data-open={open? "true" : "false"} 
          onClick={getPhoneMenu}
        >
          <div className='wrapper-burger'>
            <span className="line-burger line1-burger"></span>
            <span className="line-burger line2-burger"></span>
            <span className="line-burger line3-burger"></span>
          </div>

        </button>

        {showPhoneMenu && <PhoneMenu />}

        <div className="wrapper-logo">
          <a href="#"><img src={themeMod === 'light'? logoLight : logoDark} className="logo"/></a>
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

          <a href="/favorite" className="favorite-link" title="Favorite">
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


          {themeMod === 'light' && <div className="icon-wrapper wrapper-dark-mode">
            <button onClick={ toggleTheme } className="item-icon material-symbols-outlined dark-mode-icon">dark_mode</button>
            <span className="item-text">Dark</span>
          </div>}

          {themeMod === 'dark' && <div className="icon-wrapper wrapper-light-mode">
            <button onClick={ toggleTheme } className="item-icon material-symbols-outlined light-mode-icon">light_mode</button>
            <span className="item-text">light</span>
          </div>}

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