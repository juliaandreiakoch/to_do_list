import { useState } from "react";

export const EditInput: React.FC<{
  editItems: ({ idToBeEdited, newText, isEditig }: { idToBeEdited: number; newText: string, isEditig: boolean }) => void;
  id: number;
  isEditing: boolean;
}> = ({ editItems, id, isEditing }) => {
  const [newText, setNewText] = useState("");

  const handleEditTask = (event: React.FormEvent) => {
    event.preventDefault();
    editItems({ idToBeEdited: id, newText: newText, isEditig: false });
    setNewText("");
  };

  return (
    <div className="formEditInput">
      {(isEditing) ? (
        <form onSubmit={handleEditTask}>
          <input 
            type="text"
            className="editTask"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Edit task"
          />
          <input type="submit" value="Confirm"/>
        </form>
      ): ""}
    </div>
  );
};
