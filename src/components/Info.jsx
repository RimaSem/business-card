import mainPhoto from "../assets/main-photo.png"
import emailIcon from "../assets/email-icon.png"
import linkedinIcon from "../assets/linkedin-icon.png"

export default function Info() {
    return <div className="info">
        <img src={mainPhoto} alt="profile photo" />
        <div className="info--intro">
            <h2>Laura Smith</h2>
            <p>Frontend Developer</p>
            <p>laurasmith.website</p>
        </div>
        <div className="info--contacts">
            <div className="email-btn"><img src={emailIcon}/><span>Email</span></div>
            <div className="linkedin-btn"><img src={linkedinIcon}/><span>LinkedIn</span></div>
        </div>
    </div>
}