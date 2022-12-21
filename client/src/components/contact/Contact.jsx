import "./contact.scss";
import FacebookIcon from '@mui/icons-material/Facebook'; 
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import TwitterIcon from '@mui/icons-material/Twitter';
import Instagram from "@mui/icons-material/Instagram";
import Google from "@mui/icons-material/Google";

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contactWrapper">
            <span>lets be in touch</span>
            <div className="contactInput">
                <input type="text" placeholder="enter your mail" />
                <button>JOIN US</button>
            </div>
            <div className="contactIcons">
                <FacebookIcon/>
                <Instagram/>
                <LinkedInIcon/>
                <Google/>
                <TwitterIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact