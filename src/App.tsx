import * as C from './style.ts';
import Logo from './assets/Logo.png'
import TaskTitle from './components/taskheader/';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState, useRef, useEffect } from 'react';
import { Create, Finalize, Delete } from './controllers/task';
import { TaskType } from './components/taskheader';

const App = () => {
    const [tasks, setTasks] =  useState<TaskType[]>([]);
    let inputref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const getTasks: string | null = localStorage.getItem('tasks');
        const jsontasks: TaskType[] = JSON.parse(getTasks || '[]');

        if(jsontasks && jsontasks.length > 0) {
            jsontasks.sort((a:TaskType,b:TaskType) => {
                if(a.done && !b.done) {
                    return 1
                }
                else if(b.done && !a.done) {
                    return -1
                }
                else {
                    return 0
                }
            })
    
            setTasks(jsontasks)
        }
    }, [])


    const handlerclick = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputref.current || !inputref.current.value || inputref.current.value.length < 1) {
            return alert('Input Vazio')
        }

        const newtask: TaskType[] = Create(inputref.current?.value || '');

        newtask.sort((a: TaskType, b: TaskType) => {
            if (a.done && !b.done) {
                return 1;
            } else if (b.done && !a.done) {
                return -1;
            } else {
                return 0;
            }
        });

        setTasks(newtask);

        inputref.current.value = '';
    }

    const handlerfinalize = (id: number) => {
        const edittask: TaskType[] = Finalize(id);

        edittask.sort((a:TaskType,b:TaskType) : number => {
            if(a.done && !b.done) {
                return 1
            }
            else if(b.done && !a.done) {
                return -1
            }
            else {
                return 0
            }
        })

        setTasks(edittask)
    }

    const deleteTask = (id: number) => {
        const newtasks: TaskType[] =  Delete(id);

        newtasks.sort((a:TaskType,b:TaskType) : number => {
            if(a.done && !b.done) {
                return 1
            }
            else if(b.done && !a.done) {
                return -1
            }
            else {
                return 0
            }
        })

        setTasks(newtasks)
    }

    return (
        <C.Container>
            <C.Header>
                <img src={Logo} alt="Logo" />

                <C.InputContainer onSubmit={handlerclick}>
                    <C.Input type="text" placeholder= "Adicione uma Tarefa" ref={inputref} maxLength={80}/>
                    <C.Button type="submit">
                        Criar 
                        <AiOutlinePlusCircle size={15} style={{marginLeft: '5.2px'}}/>
                    </C.Button>
                </C.InputContainer>
            </C.Header>
            <C.Content>
                <TaskTitle tasks={tasks} handlerfinalize = {handlerfinalize} handlerdelete = {deleteTask} />
            </C.Content>
        </C.Container>
    )
}

export default App;