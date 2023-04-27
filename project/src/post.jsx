export function Post (props){
    return(
        <>
            <div>
                <p>{props.author}</p>
                <p>{props.content}</p>
            </div>
        </>
    )
}