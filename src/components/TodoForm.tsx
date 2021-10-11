import React, { useState } from 'react'

export const TodoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    };

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            console.log(title)
            setTitle('')
        }
    };

    return (
        <div className="input-field mt2">
            <input
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                type="text"
                id="title"
                placeholder="Title"
            />
            <label htmlFor="title" className='active'>Title</label>
        </div>
    )
};
