import logo from "../resources/temlinlogo.png"
import styles from "./Header.module.css"

function Header(){
    return <header className={styles.header}>
        <img className={styles.headerLogo} src={logo}/>
        <h1>PORTFOLIO FORM</h1>
        <p>Fill this simple form to generate your personalised portfolio!</p>

    </header>
}

export default Header