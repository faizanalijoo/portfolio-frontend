import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

function Footer() {
    return <footer>
        <p>Can't find answer? Call us by phone on <a href="callto:9971169695">9971169695</a> or email us at <a href="mailto:support@philom.in">support@philom.in</a></p>
        
        <div className={styles.link}><Link to='/form' className={styles.linkk}>Click here to build your personalized portfolio</Link></div>
        
    </footer>
}

export default Footer