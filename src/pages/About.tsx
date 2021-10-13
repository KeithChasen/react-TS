import React from 'react';
import { useHistory } from 'react-router-dom'

export const About: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>Info page</h1>
            <button className="btn" onClick={() => history.push('/')}>Back</button>
        </>
    )
};
