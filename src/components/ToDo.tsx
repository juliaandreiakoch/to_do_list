import { useState } from "react";
import { Form } from "./Form";
import '../index.css';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Dropdown } from 'react-bootstrap';

interface editTaskType{id:number, taskDescription:string, isEditig:boolean};

export const ToDo: React.FC = () => {
  const [tasks, setTasks] = useState<{id: number, taskDescription: string, isEditig: boolean}[]>([]);

  const addTaskToList = ({id, taskDescription}: {id: number, taskDescription: string}) => {
      if(taskDescription) {
        setTasks([...tasks, {id: id, taskDescription: taskDescription, isEditig: false}])
      }
  };
  const deleteItems = (idToBeDeleted: number) => {
    setTasks(tasks.filter((task) => task.id !== idToBeDeleted))
  }
  const editItems = ({idToBeEdited, newText}: {idToBeEdited:number, newText:string}) => {
    const taskToEdit = tasks.findIndex((task) => task.id === idToBeEdited)
    let copyTasks = [...tasks]
    copyTasks[taskToEdit].taskDescription = newText
    setTasks(copyTasks)
  }
const editTask = (currentTask: {id:number, taskDescription:string, isEditig:boolean}) => {
  const taskToEdit = tasks.findIndex((task) => task.id === currentTask.id)
  let copyTasks = [...tasks]
  copyTasks[taskToEdit].isEditig = !copyTasks[taskToEdit].isEditig
  setTasks(copyTasks)
}
    
  return (
    <div>
      <h1>To do List</h1>
      <div className="add-task">
        <div className="form">
        <Form addTaskToList={addTaskToList}/>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className="checkbox-input">
                <input type="checkbox" className="checkboxItem"/>{task.taskDescription} 
              </div>
              <Dropdown>
              <Dropdown.Toggle className="expandButton" variant="primary" id="dropdown-basic">
                ...
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {editItems({idToBeEdited: task.id, newText: task.taskDescription})}}> <FaEdit/> Edit</Dropdown.Item>
                <Dropdown.Item onClick={() => {deleteItems(task.id)}}> <FaTrashAlt/> Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </li> 
          ))}
        </ul>
      </div>
    </div>
  );
};
