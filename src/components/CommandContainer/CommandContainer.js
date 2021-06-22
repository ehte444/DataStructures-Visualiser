import React from 'react';
import Command from '../Command/Command';
import './commandcontainer.css';

function CommandContainer({inputHandler}) {
  return (
    <div className="commands p-2 pr-4">
     <p className="c-title ml-2 text-dark">Commands</p>
     <div className="border border-dark"></div>
      <Command label={"Create an Array"} placeholder={"1 2 3 4 5"} btn={"Create"} inputHandler={inputHandler}/>
      <p className="text-secondary p-2 ml-2">
        Note:-
        Type while adding space between each element and then press Create to create an Array
      </p>
    </div>
  )
}

export default CommandContainer;
