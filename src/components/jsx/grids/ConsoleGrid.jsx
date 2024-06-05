import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConsoleItem from '../items/ConsoleItem';

function ConsoleGrid() {
    const [consoleData, setConsoleData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/get-console');
            setConsoleData(result.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            {
                Array.isArray(consoleData) && consoleData.map((console) => (
                    <ConsoleItem
                        console={{ ...console }}
                    />
                ))
            }
        </div>
    );
}

export default ConsoleGrid;
