import React, { useState } from 'react';
import Colum from "./Colum";
import Card from "../Card/card";
import AddCard from '../Card/AddCard';


const Board = () => {
  const [columns, setColumns] = useState({
    todo: [
      { title: "Task 1", date: "21/03/22", timeLeft: 18, comments: 16, files: 0 },
      { title: "Task 2", date: "22/03/22", timeLeft: 15, comments: 12, files: 2 },
    ],
    inProgress: [
      { title: "Task 3", date: "23/03/22", timeLeft: 12, comments: 8, files: 1 },
      { title: "Task 4", date: "24/03/22", timeLeft: 10, comments: 5, files: 3 },
    ],
    done: [
      { title: "Task 5", date: "25/03/22", timeLeft: 5, comments: 3, files: 0 },
      { title: "Task 6", date: "26/03/22", timeLeft: 3, comments: 2, files: 1 },
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
