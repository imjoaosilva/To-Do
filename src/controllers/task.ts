import { TaskType } from "../components/taskheader/index";
import { v4 as uuidv4 } from 'uuid';

export const Create = (text:string) => {
    const getTasks = localStorage.getItem('tasks')

    let tasks = []

    if (getTasks) {
        tasks = JSON.parse(getTasks);
    }

    const taskExists: boolean = tasks.some((task:TaskType) => task.text == text);

    if(taskExists) return alert('Já existe uma tarefa com esse nome')

    const newTask = {
        id: uuidv4(),
        text: text,
        done: false
    };

    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    return tasks
}

export const Finalize = (id:number) => {
    const getTasks = localStorage.getItem('tasks')

    let tasks: TaskType[] = [];

    if (getTasks) {
        tasks = JSON.parse(getTasks);
    }
    
    const filtertask = tasks.filter(task => task.id == id)
    filtertask[0].done = filtertask[0].done ? false : true;

    localStorage.setItem('tasks', JSON.stringify(tasks))

    return tasks
}

export const Delete = (id:Number) => {
    const getTasks = localStorage.getItem('tasks')

    let tasks: TaskType[] = [];

    if (getTasks) {
        tasks = JSON.parse(getTasks);
    }

    const index = tasks.findIndex(task => task.id == id)

    tasks.splice(index, 1)
    
    localStorage.setItem('tasks', JSON.stringify(tasks))

    return tasks

}