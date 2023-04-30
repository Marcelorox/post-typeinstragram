import { format, formatDistanceToNow } from 'date-fns';

import { Comment } from './Comment'
import { Avatar } from './Avatar'




import Style from './post.module.css'
export function Post({author, publishedAt, content}){
    const PublishedDateFormatted = format(publishedAt, "d 'of' LLLL 'in' HH:mm'h'")

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        addSuffix:true
    })
    return(
        <article className={Style.post}>
            <header>
                <div className={Style.author}>
                    <Avatar src={author.avatarUrl} alt="" />
                    <div className={Style.authorContainer}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                
                <time title={PublishedDateFormatted} dateTime={publishedAt.toISOString()}> {publishedDateRelativeToNow}</time>

                
            </header>
            <div className={Style.content}>
                {content.map(line =>{

                    if (line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    }else if(line.type === "link"){    
                        return <p><a href="">{line.content}</a></p>
                    }
                    
                })}
                

            </div>

            <form action="" className={Style.commentForm}>
                <strong>write your feedback</strong>

                <textarea className= {Style.textarea}
                placeholder='put your comment'/>

               <footer>
                    <button type='submit'>publish</button>
                </footer> 
            </form>
            <div className={Style.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>

        </article>
    )
}
