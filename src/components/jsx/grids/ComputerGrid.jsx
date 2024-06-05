import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComputerItem from '../items/ComputerItem';

function ComputerGrid() {
    const [computerData, setComputerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/get-computer');
            setComputerData(result.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            {
                Array.isArray(computerData) && computerData.map((computer) => (
                    <ComputerItem
                        computer={{ ...computer }}
                    />
                ))
            }
        </div>
    );
}

export default ComputerGrid;
