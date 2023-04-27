import { Header } from "./components/header";
import { SideBar } from "./components/Sidebar";
import Styles from './app.module.css'


export function App() {

  return (
    <div>

      <Header/>

    <div className={Styles.wrapper}>

      <SideBar/>
      
      <main>

      </main>

    </div>
    </div>
  )
}

