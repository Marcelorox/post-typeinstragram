import Style from './post.module.css'

export function post(){
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
                <p>hey guys this is my portfolio
                I maked this project to talk about my self and 
               <a href="https://github/marcelorox">this is the link for my gitHub just click here</a>  
               <a href="">#newproject #mygithubmylife</a>
                </p>

            </div>
        </article>
    )
}