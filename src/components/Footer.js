import styles from "./Footer.module.css"

function Footer() {
    return <footer>
        <p>Can't find answer? Call us by phone on 22 1457 1290 or email us at support@philom.in</p>
        
        <div className={styles.link}><h3>Click here to build your personalized portfolio</h3></div>
        
    </footer>
}

export default Footer