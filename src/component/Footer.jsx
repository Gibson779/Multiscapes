import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <> 
        <div>
            <h2>Footer</h2>

        </div>

        <hr className="footer__line" />

    <footer className="footer__bottom">

      <div className="footer__container">
        <p className="footer__copyright">
          © {new Date().getFullYear()} AB Joinery. All rights reserved.
          <Link to="/privacy">
        <li className="privacy__link"> Privacy Policy</li>
        </Link>
        </p>

      </div>
    </footer>

        </>
    )

}