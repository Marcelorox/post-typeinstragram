import { Header } from "./components/header";
import { SideBar } from "./components/Sidebar";
import { Post } from './components/post'

import Styles from './app.module.css'


export function App() {

  return (
    <div>

      <Header/>

    <div className={Styles.wrapper}>

      <SideBar/>
      
      <main>

      <Post/>
      <Post/>

      </main>

    </div>
    </div>
  )
}