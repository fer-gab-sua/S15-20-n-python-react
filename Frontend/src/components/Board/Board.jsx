import React, { useState } from 'react';
import Colum from "./Colum";
import Card from "../Card/card";
import AddCard from '../Card/AddCard';
import reunion from '../../assets/img/cards/'

const Board = () => {
  const [columns, setColumns] = useState({
    todo1: [
      { title: "Reunion de equipo para nuevas implementaciones", date: "2024-06-15", timeLeft: 30, comments: 10, files: 1 , imagen: reunion },

    ],
    todo: [
      { title: "Hacer un bosquejo del cartel para el sitio", date: "2024-06-15", timeLeft: 3, comments: 16, files: 0 , img: imagen1 },
      { title: "Editar los borradores de correo electronico",date: "2024-06-15", timeLeft: 3, comments: 12, files: 2},
      { title: "Organizar la lista de clientes",date: "2024-06-15", timeLeft: 3,comments: 8, files: 1 },
      { title: "Hacer un bosquejo del tipo de letra 'Teamy Dreamy'",date: "2024-06-15", timeLeft: 3, comments: 5, files: 3 },
    ],
    inProgress: [
      { title: "Informe Legal",date: "2024-06-15", timeLeft: 3,comments: 8, files: 1 },
      { title: "Ventanjas de las redes sociales",date: "2024-06-15", timeLeft: 3, comments: 5, files: 3 },
      { title: "Capacitacion nuevo programa de ventas",date: "2024-06-15", timeLeft: 3, comments: 5, files: 3 },
    ],
    testing: [
      { title: "Desarrollo facturacion electronica",date: "2024-06-15", timeLeft: 3,comments: 3, files: 0 },
      { title: "Funcion Chat Ia Ventas",date: "2024-06-15", timeLeft: 3,comments: 2, files: 1 },
    ],
    done: [
      { title: "Contratos con Freelancer",date: "2024-06-15", timeLeft: 3,comments: 3, files: 0 },
      { title: "Aprobacion de presupuesto",date: "2024-06-15", timeLeft: 3,comments: 2, files: 1 },
      { title: "Enviar informe del primer Semestre",date: "2024-06-15", timeLeft: 3,comments: 2, files: 1 },
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
      <Colum title="ideas futuas">
        {columns.todo1.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            date={card.date}
            timeLeft={card.timeLeft}
            comments={card.comments}
            files={card.files}
            imagen={card.imagen}
          />
        ))}
        <AddCard onAddCard={addCard} column="todo1" />
      </Colum>
      <Colum title="Por hacer">
        {columns.todo.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            date={card.date}
            timeLeft={card.timeLeft}
            comments={card.comments}
            files={card.files}
            imagen={card.imagen}
          />
        ))}
        <AddCard onAddCard={addCard} column="todo" />
      </Colum>
      <Colum title="Pendiente">
        {columns.inProgress.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            date={card.date}
            timeLeft={card.timeLeft}
            comments={card.comments}
            files={card.files}
            imagen={card.imagen}
          />
        ))}
        <AddCard onAddCard={addCard} column="inProgress" />
      </Colum>
      <Colum title="Realizado para aprobacion">
        {columns.testing.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            date={card.date}
            timeLeft={card.timeLeft}
            comments={card.comments}
            files={card.files}
            imagen={card.imagen}
          />
        ))}
        <AddCard onAddCard={addCard} column="done" />
      </Colum>
      <Colum title="Realizado">
        {columns.done.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            date={card.date}
            timeLeft={card.timeLeft}
            comments={card.comments}
            files={card.files}
            imagen={card.imagen}
          />
        ))}
        <AddCard onAddCard={addCard} column="done" />
      </Colum>
    </div>
  );
};

export default Board;
