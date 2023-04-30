import { Header } from "./components/header";
import { SideBar } from "./components/Sidebar";
import { Post } from './components/post'

import Styles from './app.module.css'

//author: {avatar.url: "", name = "", role = ""}
//publishedAt: Date
//content: String

const posts = [
  
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/marcelorox.png",
      name: "Marcelo Rocha",
      role : "Enginner Dev"
    },
    content: [
      { type: 'paragraph', content: 'hey guys this is my portfolio,'},
      { type: 'paragraph', content: 'I made this project to talk about my self and '},
      { type: 'link', content: 'this is the link for my gitHub just click here'},
    ],
    publishedAt : new Date('2022-05-03 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/imgustacabral.png",
      name: "Gustavo Cabral",
      role : "Dev"
    },
    content: [
      { type: 'paragraph', content: 'hey guys this is my portfolio,'},
      { type: 'paragraph', content: 'I made this project to talk about my self and '},
      { type: 'link', content: 'this is the link for my gitHub just click here'},
    ],
    publishedAt : new Date('2022-04-30 20:00:00')
  },

]
export function App() {

  return (
    <div>

      <Header/>

    <div className={Styles.wrapper}>

      <SideBar/>
      
      <main>

      {posts.map(post => {
       return( <Post
        author = {post.author}
        content = {post.content}
        publishedAt={post.publishedAt}
       />
       )
      })}

      </main>

    </div>
    </div>
  )
}