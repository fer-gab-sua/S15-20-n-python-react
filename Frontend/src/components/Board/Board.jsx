import React, { useState } from 'react';
import Colum from "./Colum";
import Card from "../Card/card";
import AddCard from '../Card/AddCard';


const Board = () => {
  const [columns, setColumns] = useState({
    todo: [
      { title: "Task 1", date: "2024-06-15", timeLeft: 3, comments: 16, files: 0 },
      { title: "Task 2",date: "2024-06-15", timeLeft: 3, comments: 12, files: 2},
    ],
    inProgress: [
      { title: "Task 3",date: "2024-06-15", timeLeft: 3,comments: 8, files: 1 },
      { title: "Task 4",date: "2024-06-15", timeLeft: 3, comments: 5, files: 3 },
    ],
    testing: [
      { title: "Task 5",date: "2024-06-15", timeLeft: 3,comments: 3, files: 0 },
      { title: "Task 6",date: "2024-06-15", timeLeft: 3,comments: 2, files: 1 },
    ],
    done: [
      { title: "Task 5",date: "2024-06-15", timeLeft: 3,comments: 3, files: 0 },
      { title: "Task 6",date: "2024-06-15", timeLeft: 3,comments: 2, files: 1 },
    ],
  });

  const addCard = (column, card) => {
    setColumns(prevState => ({
      ...prevState,
      [column]: [...prevState[column], card]
    }));
  };

  return (
    <div className="flex justify-center space-x-4">
      <Colum title="To Do">
        {columns.todo.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            date={card.date}
            timeLeft={card.timeLeft}
            comments={card.comments}
            files={card.files}
          />
        ))}
        <AddCard onAddCard={addCard} column="todo" />
      </Colum>
      <Colum title="In Progress">
        {columns.inProgress.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            date={card.date}
            timeLeft={card.timeLeft}
            comments={card.comments}
            files={card.files}
          />
        ))}
        <AddCard onAddCard={addCard} column="inProgress" />
      </Colum>
      <Colum title="Testing">
        {columns.testing.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            date={card.date}
            timeLeft={card.timeLeft}
            comments={card.comments}
            files={card.files}
          />
        ))}
        <AddCard onAddCard={addCard} column="done" />
      </Colum>
      <Colum title="Done">
        {columns.done.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            date={card.date}
            timeLeft={card.timeLeft}
            comments={card.comments}
            files={card.files}
          />
        ))}
        <AddCard onAddCard={addCard} column="done" />
      </Colum>
    </div>
  );
};

export default Board;
