import logo from '../../Images/logo.svg'
import style from './style.css'

//  <LOGO>
import icon_facebook from '../../Images/icon-facebook.svg'
import icon_twitter from '../../Images/icon-twitter.svg'
import icon_instagram from '../../Images/icon-instagram.svg'
// <LOGO />

let Footer = () => {
    return (
        <div className="footer">
            <div className="footer_conteud">
                <div className="footer_icon_and_menu">
                    <div className="footer_icon">
                        <img src={logo} alt="Logo" className="footer_logo" />
                    </div>


                    <div className="footer_links_menu">
                        <nav>
                            <ul>
                                <div className="footer_divisor_menu">
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </div>

                                <div className="footer_divisor_menu">
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Press Kit</a></li>
                                </div>

                                <div className="footer_divisor_menu">
                                    <li><a href="#">Install Guide</a></li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="footer_social_medias">
                    <a href="#" target="_blank">
                        <img src={icon_facebook} alt="Logo" className="footer_logo" />
                    </a>
                    <a href="#" target="_blank">
                        <img src={icon_twitter} alt="Logo" className="footer_logo" />
                    </a>
                    <a href="#" target="_blank">
                        <img src={icon_instagram} alt="Logo" className="footer_logo" />
                    </a>                    
                </div>
            </div>

            {/* <div className="by_autor">
                <p>Autor Wendel Eduardo</p>
            </div> */}
        </div>
    )
}

export default Footer