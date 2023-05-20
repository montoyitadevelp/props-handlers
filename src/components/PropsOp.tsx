type Props = {
    name: string;
    task?: string; //Es opcional e undefinided con el ?

}

export const What = (props: Props) => {
    const { name, task = "by MontoyitaDev" } = props

    return <p><li>So {name} {task}</li></p>
}



