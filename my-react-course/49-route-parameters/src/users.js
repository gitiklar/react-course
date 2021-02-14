import React from 'react';
import { useParams } from 'react-router-dom';

export default function Users() {
    const { id } = useParams() ;
    const users = {
      1: 'brad',
      2: 'anna',
      3: 'clair'
    };
    return <h2>Users: {users[id]}</h2>;
};