
type ButtonProps = {
    title: string
    callBack:()=>void
}

export const Button = (props:ButtonProps) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return(
        <button onClick={onClickHandler}>{props.title}</button>

    )
}