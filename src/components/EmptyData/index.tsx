import { BsFileSpreadsheet } from "react-icons/bs";
import styles from "./styles.module.css";

export const EmptyData = () => {
  return (
    <div className={styles.container}>
      <BsFileSpreadsheet />
      <p>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
};
