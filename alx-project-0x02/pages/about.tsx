import React from 'react'
import Button from '../components/common/Button'


const AboutPage = () => {
    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-4">About SoloForge</h1>
            <p className="mb-6">This is the About page where you can learn more about the project.</p>

            <div className="space-x-2">
                <Button title="Small Button" size="small" shape="rounded-sm" />
                <Button title="Medium Button" size="medium" shape="rounded-md" />
                <Button title="Large Button" size="large" shape="rounded-full" />
            </div>
        </main>
    );
};

export default AboutPage;
