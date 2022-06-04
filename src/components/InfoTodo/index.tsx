import styles from "./styles.module.css";

interface InfoTodoProps {
  createdTask?: number;
  completedTask?: number;
}

export const InfoTodo = ({
  createdTask = 0,
  completedTask = 0,
}: InfoTodoProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p>Tarefas criadas</p>
        <span>{createdTask}</span>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.completed}>Concluidas</p>
        <span>{completedTask}</span>
      </div>
    </div>
  );
};
