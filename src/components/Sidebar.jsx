import Styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function SideBar(){
    return(
        
        <aside className={Styles.sidebar}>
            
            <img className={Styles.cover} src="https://images.unsplash.com/photo-1682479672124-6996483fd4a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>
            
            <div className={Styles.profile}>
                <Avatar src="https://github.com/marcelorox.png"/> 
                <strong>Marcelo Rocha</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href=""><PencilLine size="20" /> editar perfil</a>
            </footer>

        </aside>
    )
}