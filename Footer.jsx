import { TbWorld } from "react-icons/tb";
import { BsChevronDown } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

let Footer=()=>{

    return <>
    <div id="FooterDiv">
    <div id='fdiv1'> 
        <div id='fd1fd1'> <img src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;,"} alt="" />
    </div>
        <div id='fd1fd2'>
            <button className='FooterButton'><img src={"https://img.freepik.com/free-vector/illustration-india-flag_53876-27130.jpg?ga=GA1.1.733999918.1721124181&semt=ais_hybrid&w=740"} alt="" /> India <BsChevronDown /> </button>
            <button className='FooterButton'><TbWorld /> English <BsChevronDown /></button>
        </div>
    </div>

  <div id="Fdiv2">
       <div id="fd2d1"> 
        <div id="fd2d1d1">
             <h1 class="footer-heading">ABOUT ZOMATO</h1>
                <p class="footer-content">Who We Are</p>
                <p class="footer-content">Blog</p>
                <p class="footer-content">Work With Us</p>
                <p class="footer-content">Invertor Relations</p>
                <p class="footer-content">Report Fraud</p>
                <p class="footer-content">Press kit</p>
                <p class="footer-content">Contact Us</p>
        </div>
        <div id="fd2d1d2">
            <h1 class="footer-heading">ZOMAVERSE</h1>
                <p class="footer-content">Zomato</p>
                <p class="footer-content">Blinkit</p>
                <p class="footer-content">District</p>
                <p class="footer-content">Feeding India</p>
                <p class="footer-content">Hyperpure</p>
                <p class="footer-content">Zomato Live</p>
                <p class="footer-content">Zomaland</p>
                <p class="footer-content">Weather Union</p>
        </div>
       </div>
       <div id="fd2d2">
        <div id="fd2d2d1">
            <h1 class="footer-heading">LEARN MORE</h1>
                <p class="footer-content">Privacy</p>
                <p class="footer-content">Security</p>
                <p class="footer-content">Terms</p>
        </div>
        <div id="fd2d2d2" >
            <h1 class="footer-heading">SOCIAL LINKS</h1>
            <div id="socialLogos">

                <div className="logo"><FaLinkedin /></div>
                <div className="logo"><FaInstagramSquare /></div>
                <div className="logo"><FaSquareXTwitter /></div>
                <div className="logo"><FaYoutubeSquare /></div>
                <div className="logo"><SiFacebook /></div>

            </div> <br />
            
            <img src={"https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"} alt="" />
            <img src={"https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"} alt="" />
            </div>
        </div> 


  </div>

<div id="footer-End">
    <hr /> <br />
    <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved.</p>
</div>

    </div>

    
    </>
}
export default Footer;