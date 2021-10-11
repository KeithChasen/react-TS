import React from 'react'

export const TodoForm: React.FC = () => (
  <div className="input-field mt2">
      <input type="text" id="title" placeholder="Title"/>
      <label htmlFor="title" className='active'>Title</label>
  </div>
);
