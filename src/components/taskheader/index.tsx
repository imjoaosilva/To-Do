import * as C from './style.ts'
import { TiClipboard } from 'react-icons/ti'
import TaskItem from '../task/';

import { useAutoAnimate } from '@formkit/auto-animate/react'

export interface TaskType {
    text: string;
    done: boolean;
    id: number;
}

interface TaskTitleProps {
    tasks: TaskType[];
    handlerfinalize: (id: number) => void;
    handlerdelete: (id: number) => void;
}

const TaskTitle = ({ tasks, handlerfinalize, handlerdelete }: TaskTitleProps) => {

    const filterdonetask = tasks?.filter(task => task.done)
    const [listref] = useAutoAnimate()

    return (
        <>
            <C.Container>
                <C.Left>
                    <C.Title color = "">Tarefas criadas</C.Title>
                    <C.TasksAmount>{tasks && tasks.length ? tasks.length : 0}</C.TasksAmount>
                </C.Left>
                <C.Right>
                    <C.Title color="purple">Concluídas</C.Title>
                    <C.TasksAmount>{filterdonetask && filterdonetask.length > 0 ? `${filterdonetask?.length} de ${tasks?.length}` : 0}</C.TasksAmount>
                </C.Right>
            </C.Container>
            {
                tasks?.length <= 0 ? 
                (
                    <>
                        <C.Separator/>
                        <C.Align>
                            <TiClipboard size={70} color={"gray"}/>
                            <C.TextBold >Você ainda não tem tarefas cadastradas</C.TextBold>
                            <C.TextSemiBold>Crie tarefas e organize seus itens a fazer</C.TextSemiBold>
                        </C.Align>
                    </>
                )
                : (
                    <C.TaskContainer ref={listref}>
                        {tasks?.map(item => (
                            <TaskItem
                                key = {item.id}
                                text= {item.text}
                                done = {item.done}
                                id = {item.id}
                                finalizeclick = {handlerfinalize}
                                deleteclick = {handlerdelete}
                            />
                        ))}
                    </C.TaskContainer>
                )
            }
        </>
    )
}


export default TaskTitle;