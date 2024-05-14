import './CountDisplay.css';
import React, { useState, useEffect } from 'react';

const CountDisplay = () => {
    const [count, setCount] = useState(null);

    useEffect(() => {
        // Fetch count from the API
        fetch('/api/hits')
            .then(response => response.json())
            .then(data => setCount(data.count))
            .catch(error => console.error('Error fetching count:', error));
    }, []); // Empty dependency array to run this effect only once

    return (
        <div className="count-container">
            <h1 className="count-heading">Count</h1>
            {count === null ? (
                <p className="count-value">checking.</p>
            ) : (
                <p>{count}</p>
            )}
        </div>
    );
};

export default CountDisplay;