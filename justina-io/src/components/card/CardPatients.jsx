import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';

const CardPatients = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);
  const photos = [
    'img/image6.png',
    'img/frame5.png',
    'img/image1.png',
    'img/image3.png',
    'img/frame29.png',
    'img/image1.png',
    'img/image6.png',
    'img/frame5.png',
    'img/image6.png',
  ];

  useEffect(() => {
   
    const fetchPatients = async () => {
      try {
        const response = await axios.get('https://h1-09-java-react.onrender.com/api/pacientes');
        console.log('API Response:', response.data);
        const patientsData = response.data.map((patient, index) => ({
          name: `${patient.nombre} ${patient.apellido}`,
          photo: photos[index % photos.length],
        }));
        setPatients(patientsData);
      } catch (error) {
        console.error('Error fetching patients data:', error);
        setError('Error fetching patients data.');
      }
    };

    fetchPatients();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="h-screen mx-auto py-4">
      {patients.length === 0 ? (
        <p>No patients found</p>
      ) : (
        patients.map((patient, index) => (
          <Card
            key={index}
            photo={patient.photo}
            name={patient.name}
          />
        ))
      )}
    </div>
  );
};

export default CardPatients;
