import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
    return (
        <div className="border rounded p-4 mb-4 bg-white">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="mb-1">Email: {email}</p>
            <p className="text-gray-500">{address}</p>
        </div>
    );
};

export default UserCard;
