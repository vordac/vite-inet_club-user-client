import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SoftwareItem from '../items/SoftwareItem';

function SoftwareGrid() {
    const [softwareData, setSoftwareData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:5000/get-software');
            setSoftwareData(result.data);
            console.log(result.data);
        };


        fetchData();
    }, []);

    return (
        <div>
            {
                Array.isArray(softwareData) && softwareData.map((software) => (
                    <SoftwareItem
                        software={{ ...software }}
                    />
                ))
            }
        </div>
    );
}

export default SoftwareGrid;
