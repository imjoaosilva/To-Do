import * as C from './style.ts'
import { BsTrashFill } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'


interface Props {
    text: string
    done: boolean
    id : number
    finalizeclick : (id:number) => void
    deleteclick : (id:number) => void
}

const TaskItem = (props: Props) => {

    const handlerchangestatus = () => {
        props.finalizeclick(props.id)
    }

    const handlerdelete = () => {
        props.deleteclick(props.id)
    }

    return (
        <>
            <C.Task done= {props.done}>
                <C.CheckBox onClick={handlerchangestatus}>
                    {props.done? <AiFillCheckCircle size={20}/> : <div/>}
                </C.CheckBox>
                <C.TaskText done= {props.done}>{props.text}</C.TaskText>
                <BsTrashFill color={"808080"} onClick={handlerdelete} className="icon"/>
            </C.Task>
        </>
    )
}


export default TaskItem;