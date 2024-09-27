import React from 'react'
import './Footer.css';
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>

      <footer>
        <div className="brands">
          <img src="https://premier.uz/files/global/partners/idea_logo.png" alt="" />
          <div>
            <FaTelegramPlane className='telegram' />
            <FaFacebookF className='facebook' />
            <FaInstagram className='instagram' />
          </div>
        </div>
        <div className="xaridorlarga">
          <h3>Xaridorlarga</h3>
          <Link className='savol'>
            <p>Savol-javob</p>
            <p>Saytda buyurtma berish</p>
          </Link>
        </div>
        <div className="xaridorlarga">
          <h3>idea.uz</h3>
          <Link className='savol'>
            <p>Biz haqimizda</p>
            <p>Bizning do'konlarimiz</p>
            <p>Aloqa</p>
          </Link>
        </div>
        <div className="xaridorlarga">
          <h3>Ma'lumot</h3>
          <Link className='savol'>
            <p>Maqolalar</p>
            <p>Muddatli to'lov</p>
            <p>Oferta</p>
            <p>Vakansiyalar</p>
          </Link>
        </div>
        <div className="xaridorlarga">
          <h3>Qayta aloqa</h3>
          <Link className='savol'>
            <button>Xabar qodirish</button>
            <h3>71 230 77 99</h3>
            <span>Har kuni 9:00dan 21:00gacha</span>
            <h3>info@ideastore.uz</h3>
            <span>Pochta</span>
          </Link>
        </div>
      </footer>
        <div className="footer">
          <p>2024 © «idea.uz - интернет-магазин»</p>
          <Link className='footer_bottom'>
            <p>Разработка - </p><img src="https://widget.inweb.uz/images/logo-dark.png" alt="" />
          </Link>
        </div>
    </div>
  )
}

export default Footer;