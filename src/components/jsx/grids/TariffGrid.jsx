import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TariffItem from '../items/TariffItem';

function TariffGrid() {
  const [tariffData, setTariffData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5000/get-tariff');
      setTariffData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {
        Array.isArray(tariffData) && tariffData.map((tariff) => (
          <TariffItem
            tariff={{ ...tariff }}
          />
        ))
      }
    </div>
  );
}

export default TariffGrid;
