import { Checkbox } from "pretty-checkbox-react";
import { ChangeEvent, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { TaskData } from "../../App";
import styles from "./styles.module.css";

interface TaskProps {
  task: TaskData;
  onDeleteTask: (taskId: string) => void;
  onCompletedTask: (taskId: string) => void;
}

export const Task = ({ task, onDeleteTask, onCompletedTask }: TaskProps) => {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCompleted(event.target.checked);
    onCompletedTask(task.id);
  };

  const isChecked = completed
    ? { opacity: 0.3, textDecoration: "line-through" }
    : {};

  return (
    <div className={styles.container}>
      <label className={styles.wrapper}>
        <input type="checkbox" onChange={handleCheckboxChange} />
        <span className={styles.checkmark} />
        <p style={isChecked}>{task.description}</p>
      </label>
      <button onClick={() => onDeleteTask(task.id)}>
        <BsTrash />
      </button>
    </div>
  );
};
