
import { useState } from "react";

export const Form: React.FC<{addTaskToList: ({id, taskDescription}: {id:number, taskDescription:string}) => void}> = ({addTaskToList}) => {
    const [newTask, setNewTask] = useState(""); 

    const randomNumber = Math.random();

    const handleAddTask = (event: React.FormEvent) => {
      event.preventDefault()  //para não recarregar a página quando o formulário é enviado
      addTaskToList({id: randomNumber, taskDescription: newTask})
      setNewTask("")
    };  

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a new task"/>
        <input type="submit" />
      </form>
    </div>
  );
};
