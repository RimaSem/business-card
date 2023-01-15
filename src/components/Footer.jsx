import twitterIcon from "../assets/twitter-icon.png"
import fbIcon from "../assets/fb-icon.png"
import igIcon from "../assets/ig-icon.png"
import githubIcon from "../assets/github-icon.png"


export default function Footer() {
    return <footer>
        <img src={twitterIcon} />
        <img src={fbIcon} />
        <img src={igIcon} />
        <img src={githubIcon} />
    </footer>
}