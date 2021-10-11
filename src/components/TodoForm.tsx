import React, { useRef } from 'react'

export const TodoForm: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            console.log(ref.current!.value);
            ref.current!.value = '';
        }
    };

    return (
        <div className="input-field mt2">
            <input
                ref={ref}
                onKeyPress={keyPressHandler}
                type="text"
                id="title"
                placeholder="Title"
            />
            <label htmlFor="title" className='active'>Title</label>
        </div>
    )
};
