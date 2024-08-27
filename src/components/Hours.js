// Placeholder to host a component
import React, { useEffect, useState } from 'react';

const Hours = () => {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'America/Bogota' };
        const formattedDate = currentDate.toLocaleDateString('es-ES', options);
        setFormattedDate(formattedDate);
    }, []);

    return (
        <div style={{ border: '1px solid black', padding: '10px', borderRadius: '5px' }}>
            <h3 style={{ color: 'black', fontSize: '24px' }}>Fecha: {formattedDate}</h3>
        </div>
    );
};

export default Hours;