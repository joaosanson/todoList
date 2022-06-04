import { useMemo, useState } from "react";
import { v4 } from "uuid";

import { InfoTodo } from "./components/InfoTodo";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

import styles from "./app.module.css";
import { EmptyData } from "./components/EmptyData";

export interface TaskData {
  id: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

function App() {
  const [tasksList, setTaskList] = useState<TaskData[]>([]);

  const handleCreateNewTask = (description: string) => {
    const newTask: TaskData = {
      id: v4(),
      description,
      completed: false,
      createdAt: new Date(),
    };

    setTaskList((prevState) => [...prevState, newTask]);
  };

  const handleDeleteTask = (taskId: string) => {
    const newTaskList = tasksList.filter((task) => task.id !== taskId);
    setTaskList(newTaskList);
  };

  const handleCheckedTask = (taskId: string) => {
    const newTaskList = tasksList.map((task) => {
      return {
        ...task,
        completed: task.id === taskId ? !task.completed : task.completed,
      };
    });

    setTaskList(newTaskList);
  };

  const amountCompletedTasks = useMemo(() => {
    return tasksList.filter((task) => task.completed === true).length;
  }, [tasksList]);

  const orderByDate = (a: TaskData, b: TaskData) => {
    if (a.createdAt < b.createdAt) return 1;
    if (a.createdAt > b.createdAt) return -1;
    return 0;
  };

  const amountCreatedTask = tasksList.length;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Input onAddNewTask={handleCreateNewTask} />
        <InfoTodo
          createdTask={amountCreatedTask}
          completedTask={amountCompletedTasks}
        />
        {tasksList.length === 0 ? (
          <EmptyData />
        ) : (
          <div className={styles.tasks}>
            {tasksList.sort(orderByDate).map((task) => (
              <Task
                key={task.id}
                task={task}
                onDeleteTask={handleDeleteTask}
                onCompletedTask={handleCheckedTask}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
