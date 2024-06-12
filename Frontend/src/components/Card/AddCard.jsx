import React, { useState } from 'react';

const AddCard = ({ onAddCard, column }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [timeLeft, setTimeLeft] = useState('');
  const [comments, setComments] = useState('');
  const [files, setFiles] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard(column, { title, date, timeLeft, comments, files });
    // Clear input fields after submission
    setTitle('');
    setDate('');
    setTimeLeft('');
    setComments('');
    setFiles('');
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Add Card +
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded-lg z-10">
            <h4 className="mb-4 text-lg">Add a new card to {column}</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="block mb-2 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
                className="block mb-2 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="number"
                value={timeLeft}
                onChange={(e) => setTimeLeft(e.target.value)}
                placeholder="Time Left"
                className="block mb-2 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Comments"
                className="block mb-2 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="number"
                value={files}
                onChange={(e) => setFiles(e.target.value)}
                placeholder="Files"
                className="block mb-2 p-2 border border-gray-300 rounded"
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                  Add Card
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCard;
