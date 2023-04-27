import styles from './Header.module.css'
import igniteLogo from '../assets/igniteLogo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo"/>
            <strong>my feed</strong>
        </header>  
    );
}