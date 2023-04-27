import Style from './post.module.css'

export function Post(){
    return(
        <article className={Style.post}>
            <header>
                <div className={Style.author}>
                    <img className={Style.avatar} src="https://github.com/marcelorox.png" alt="" />
                    <div className={Style.authorContainer}>
                        <strong>Marcelo Rocha</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                
                <time title='wednesday april 9:14h PM' dateTime='2022-05-11 9:14:30'>Publicado a 1hr</time>

                
            </header>
            <div className={Style.content}>
                <p>hey guys this is my portfolio</p>
               <p>I did this project to talk about my self and </p> 
               <p><a target='_blank' href="https://github.com/Marcelorox">this is the link for my gitHub just click here</a>  </p>
               
               <p><a href="">#newproject{' '} #mygithubmylife{' '}</a></p>
                

            </div>

            <form action="" className={Style.commentForm}>
                <strong>write your feedback</strong>

                <textarea className= {Style.textarea}
                placeholder='put your comment'/>

               <footer>
                    <button type='submit'>publish</button>
                </footer> 
            </form>

        </article>
    )
}
