import React, { useState } from 'react';
import Colum from "./Colum";
import Card from "../Card/card";
import AddCard from '../Card/AddCard';
import reunion from '../../assets/img/cards/reunion.webp'
import lista_clientes from '../../assets/img/cards/lista clientes.png'
import redes from '../../assets/img/cards/redes_sociales.jpg'
import presupuesto from '../../assets/img/cards/presupuesto.jpg'
import informe from '../../assets/img/cards/informe legal.webp'
import chatbot from '../../assets/img/cards/chatbot.jpeg'

const Board = () => {
  const [columns, setColumns] = useState({
    todo1: [
      {
        title: "Reunion de equipo para nuevas implementaciones",
        date: "2024-06-15",
        timeLeft: 30,
        comments: 10,
        files: 1,
        imagen: reunion,
        tags: [
          { text: 'Reunion', color: 'bg-teal-400' },
          { text: 'Equipo', color: 'bg-blue-400' }
        ]
      },
    ],
    todo: [
      {
        title: "Hacer un bosquejo del cartel para el sitio",
        date: "2024-06-15",
        timeLeft: 3,
        comments: 16,
        files: 0,
        tags: [
          { text: 'Bosquejo', color: 'bg-yellow-400' },
          { text: 'Cartel', color: 'bg-green-400' }
        ]
      },
      {
        title: "Editar los borradores de correo electronico",
        date: "2024-06-15",
        timeLeft: 3,
        comments: 12,
        files: 2,
        tags: [
          { text: 'Correo', color: 'bg-purple-400' },
          { text: 'Edicion', color: 'bg-pink-400' }
        ]
      },
      {
        title: "Organizar la lista de clientes",
        date: "2024-06-15",
        timeLeft: 3,
        comments: 8,
        files: 1,
        imagen: lista_clientes,
        tags: [
          { text: 'Clientes', color: 'bg-orange-400' },
          { text: 'Organizacion', color: 'bg-indigo-400' }
        ]
      },
      {
        title: "Hacer un bosquejo del tipo de letra 'Teamy Dreamy'",
        date: "2024-06-15",
        timeLeft: 3,
        comments: 5,
        files: 3,
        tags: [
          { text: 'Bosquejo', color: 'bg-teal-400' },
          { text: 'Tipografia', color: 'bg-lime-400' }
        ]
      },
    ],
    inProgress: [
      {
        title: "Informe Legal",
        date: "2024-06-15",
        timeLeft: 3,
        comments: 8,
        files: 1,
        imagen: informe,
        tags: [
          { text: 'Informe', color: 'bg-red-400' },
          { text: 'Legal', color: 'bg-blue-400' }
        ]
      },
      {
        title: "Ventajas de las redes sociales",
        date: "2024-06-15",
        timeLeft: 3,
        comments: 5,
        files: 3,
        imagen: redes,
        tags: [
          { text: 'Redes', color: 'bg-green-400' },
          { text: 'Ventajas', color: 'bg-yellow-400' }
        ]
      },
      {
        title: "Capacitacion nuevo programa de ventas",
        date: "2024-06-15",
        timeLeft: 3,
        comments: 5,
        files: 3,
        tags: [
          { text: 'Capacitacion', color: 'bg-purple-400' },
          { text: 'Ventas', color: 'bg-pink-400' }
        ]
      },
    ],
    testing: [
      {
        title: "Desarrollo facturacion electronica",
        date: "2024-06-15",
        timeLeft: 3,
        comments: 3,
        files: 0,
        tags: [
          { text: 'Desarrollo', color: 'bg-teal-400' },
          { text: 'Facturacion', color: 'bg-lime-400' }
        ]
      },
      {
        title: "Funcion Chat IA Ventas",
        date: "2024-06-15",
        timeLeft: 3,
        comments: 2,
        files: 1,
        imagen: chatbot,
        tags: [
          { text: 'Chat', color: 'bg-orange-400' },
          { text: 'IA', color: 'bg-indigo-400' }
        ]
      },
    ],
    done: [
      {
        title: "Contratos con Freelancer",
        date: "2024-06-15",
        timeLeft: 3,
        comments: 3,
        files: 0,
        tags: [
          { text: 'Contratos', color: 'bg-red-400' },
          { text: 'Freelancer', color: 'bg-blue-400' }
        ]
      },
      {
        title: "Aprobacion de presupuesto",
        date: "2024-06-15",
        timeLeft: 3,
        comments: 2,
        files: 1,
        imagen: presupuesto,
        tags: [
          { text: 'Aprobacion', color: 'bg-green-400' },
          { text: 'Presupuesto', color: 'bg-yellow-400' }
        ]
      },
      {
        title: "Enviar informe del primer Semestre",
        date: "2024-06-15",
        timeLeft: 3,
        comments: 2,
        files: 1,
        tags: [
          { text: 'Informe', color: 'bg-purple-400' },
          { text: 'Semestre', color: 'bg-pink-400' }
        ]
      },
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
            tags={card.tags}
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
            tags={card.tags}
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
            tags={card.tags}
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
            tags={card.tags}
          />
        ))}
        <AddCard onAddCard={addCard} column="done" />
      </Colum>
      <Colum title="En produccion">
        {columns.done.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            date={card.date}
            timeLeft={card.timeLeft}
            comments={card.comments}
            files={card.files}
            imagen={card.imagen}
            tags={card.tags}
          />
        ))}
        <AddCard onAddCard={addCard} column="done" />
      </Colum>
    </div>
  );
};

export default Board;
