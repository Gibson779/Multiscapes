import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <> 
       

        <hr className="footer__line" />

    <footer className="footer__bottom">

      <div className="footer__container">

        <img 
        src="./images/facebook.png" 
        alt="facebook" 
        className='facebook__image'
         onClick={() => window.location.href='https://www.facebook.com/Multiscapeltd'} />
        <img 
        src="./images/instagram.png" 
        alt="instagram" 
        className='instagram__image' 
        onClick={() => window.location.href='https://www.instagram.com/multiscapeltd/'} 
        />

        <p className="footer__copyright">
          © {new Date().getFullYear()} Multiscapes LTD All rights reserved.
          <Link to="/privacy">
        <li className="privacy__link"> Privacy Policy</li>
        </Link>

        </p>

      </div>
    </footer>

        </>
    )

}