import React from 'react';
import UserCard from '../components/common/UserCard';

interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
    };
}

interface UsersPageProps {
    users: User[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-4">Users</h1>
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    address={`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
                />
            ))}
        </main>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
}

export default UsersPage;
