import React from 'react';
import Topic from '../Topic/Topic';
import Navbar from '../Navbar/Navbar';
import './dashboard.css';

const structures = [
  {
    title: 'Array',
    definition: 'An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.'
  },
  {
    title: 'Linked List',
    definition: 'A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.'
  },
  {
    title: 'Stack',
    definition: 'Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).'
  },
  {
    title: 'Queue',
    definition: 'A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO).'
  },
  {
    content:'More Coming Soon'
  }
];


function Dashboard() {
  return (
    <div className="container-fluid">
      <div>
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="dash">
          <div className="header">
            <h1 className="title">
              Data Structures Visualiser
            </h1>
            <p>A Teaching/Learning tool that helps you visualise fundamental Data Structures 👾</p>
          </div>
          <div className="mt-0">
            <Topic cards={structures}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
