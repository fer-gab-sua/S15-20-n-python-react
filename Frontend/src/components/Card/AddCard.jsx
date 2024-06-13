import React, { useState } from 'react';

const AddCard = ({ onAddCard, column }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [timeLeft, setTimeLeft] = useState('');
  const [comments, setComments] = useState('0');
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const dueDate = new Date(date);
    // Calculate time left in days
    const timeDifference = dueDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
    setTimeLeft(daysLeft);
    
    onAddCard(column, { title, date, timeLeft: daysLeft, comments, files });
    setTitle('');
    setDate('');
    setComments('');
    setFiles([]);
    setIsOpen(false);
  };

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    setFiles(fileList);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 p-2 bg-blue-500 text-black font-bold bg-white rounded"
      >
        Add Card +
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded-lg z-10">
            <h4 className="mb-4 text-lg">Add a new card to {column}</h4>
            <form onSubmit={handleSubmit}>
            <label htmlFor="">Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="block mb-2 p-2 border border-gray-300 rounded"
                required
              />
              <label htmlFor=""></label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
                className="block mb-2 p-2 border border-gray-300 rounded"
                required
              />
              <div className="flex items-center space-x-2 mb-2">
                <label className="block text-sm font-medium text-gray-700">Time Left:</label>
                <span>{timeLeft} days</span>
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700">Files</label>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="block p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-gray-500 text-white rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="p-2 bg-blue text-white rounded">
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
