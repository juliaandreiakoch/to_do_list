
import { useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

export const Form: React.FC<{deleteAllItems: () => void, addTaskToList: ({id, taskDescription}: {id:number, taskDescription:string}) => void}> = ({addTaskToList, deleteAllItems }) => {
    const [newTask, setNewTask] = useState(""); 

    const randomNumber = Math.random();

    const handleAddTask = (event: React.FormEvent) => {
      event.preventDefault()  //para não recarregar a página quando o formulário é enviado
      addTaskToList({id: randomNumber, taskDescription: newTask})
      setNewTask("")
    };  

    const popover = (
      <Popover>
        <Popover.Body>
          Delete all items
        </Popover.Body>
      </Popover>
    );

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Type here your new item"/>
        <input type="submit" value="Add"/>
        <OverlayTrigger
          trigger="hover" 
          placement="right" 
          overlay={popover}
          >
          <button className="deleteAllItems" onClick={(deleteAllItems)}><FaTrashAlt/></button>
        </OverlayTrigger>
      </form>
    </div>
  );
};
