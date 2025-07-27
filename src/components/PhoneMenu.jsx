import { phoneMenu } from '../utils/phoneMenu';
import { useState } from 'react';

export default function PhoneMenu() {

  return(
    <div className="phone-menu-wrapper">
      <ul className="phone-menu-list">

        {phoneMenu.map((page, index) => {
          return(
            <li key={index} className='collection-item-phone'>
              <a href={page.link}>{page.pageName}</a>
            </li>
          )
        })}

      </ul>
    </div>
  )
}