import React from 'react'
import '../../css/main.css'
import { FaTwitter, FaFacebook, FaSnapchat, FaInstagram, FaYoutube } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header id="header">
                <a href="index.html" className="logo"><strong>STOCK MANAGEMENT</strong></a>
                <ul class="icons">
                <li><a href="https://twitter.com/pushmycart" target="_blank"
						class="icon "><FaTwitter /><span class="label">Twitter</span></a></li>
                    <li><a href="https://www.facebook.com/pushmycartglobal" target="_blank"
                        class="icon "><FaFacebook /><span class="label">Facebook</span></a></li>
                    <li><a href="https://www.Snapchat.com/" target="_blank"
                        class="icon "><FaSnapchat /><span class="label">Snapchat</span></a></li>
                    <li><a href="https://www.instagram.com/pushmycartglobal/" target="_blank"
                        class="icon "><FaInstagram /><span class="label">Instagram</span></a></li>
                    <li><a href="https://www.youtube.com/channel/UCOL3fsmprAxa4bNIg6ebG_A" target="_blank"
                        class="icon "><FaYoutube /><span class="label">Youtube</span></a></li>
                </ul>
            </header>
        </>
    )
};

export default Header;