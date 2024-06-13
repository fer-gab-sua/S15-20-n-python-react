import React, { useState } from 'react';
import TagsCards from './tagsCards';
import cardImage from '../../assets/img/card-image.png';
import flagIcon from '../../assets/svg/Flag.svg';
import userImg from '../../assets/img/userimg.png';
import commentsIcon from '../../assets/svg/commentsIcon.svg';
import filesIcon from '../../assets/svg/filesIcon.svg';
import moreHorizontal from '../../assets/svg/more-horizontal.svg';

const Card = ({ title, date, timeLeft, comments, files , imagen, tags}) => {
  /*const cardInfo = {
    tags: ['Bugs', 'Feedback', 'Algo'],

  };*/

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleEdit = () => {
    // Lógica para editar la carta
    console.log('Editar carta:', title);
    setIsMenuOpen(false); 
  };

  const handleDelete = () => {
    // Lógica para eliminar la carta
    console.log('Eliminar carta:', title);
    setIsMenuOpen(false); 
  };

  return (
    <article className="mt-4 p-4 rounded-lg bg-white">
      {/* Tags */}
      <div className="flex space-x-2">
      {tags.map((tag, index) => (
          <TagsCards key={index} text={tag.text} colorTag={tag.color} textColor="text-greentexttag" />
        ))}
      </div>
      {/* Title & button actions */}
      <div className="flex justify-between items-center mt-2">
        <h3 className="text-lg font-bold">{title}</h3>

        <div className="relative">
          <button
            onClick={handleMenuToggle}
            className="h-5 w-5 border border-slate-400 rounded-md text-center flex items-center justify-center"
          >
            <img src={moreHorizontal} alt="" className='h-5 w-5' />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={handleEdit}
                className="block w-full py-2 text-left px-4 hover:bg-gray-100"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="block w-full py-2 text-left px-4 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Image */}
      {imagen && (
        <div className="mt-2">
          <img src={imagen} alt="Card Image" />
        </div>
      )}
      {/* Deadline & time left */}
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center justify-center space-x-1">
          <img src={flagIcon} alt="Flag Icon" />
          <p>{date}</p>
        </div>
        <h6>D-{timeLeft}</h6>
      </div>
      {/* Ticket Information */}
      <div className="flex items-center justify-between mt-2">
        <img src={userImg} alt="User" className="w-6 h-6 rounded-full" />
        <div className="flex items-center space-x-2 ml-2">
          <div className="flex items-center space-x-1">
            <img src={commentsIcon} alt="Comments Icon" />
            <p>{comments} comments</p>
          </div>
          <div className="flex items-center space-x-1">
            <img src={filesIcon} alt="Files Icon" />
            <p>{files} files</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
