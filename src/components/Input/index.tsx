import { ChangeEvent, FormEvent, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import styles from "./styles.module.css";

interface InputProps {
  onAddNewTask: (task: string) => void;
}

export const Input = ({ onAddNewTask }: InputProps) => {
  const [description, setDescription] = useState("");

  const handleInputDescription = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleCreateTodo = (event: FormEvent) => {
    event.preventDefault();
    onAddNewTask(description);
    setDescription("");
  };

  const isDescriptionDisabled = !description.trim();

  return (
    <form className={styles.wrapper} onSubmit={handleCreateTodo}>
      <input
        className={styles.input}
        placeholder="Adicionar um novo todo"
        onChange={handleInputDescription}
        value={description}
      />
      <button type="submit" disabled={isDescriptionDisabled}>
        Criar
        <IoIosAddCircleOutline />
      </button>
    </form>
  );
};
