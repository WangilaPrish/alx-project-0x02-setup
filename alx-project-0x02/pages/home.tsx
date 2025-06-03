import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import React, { useState } from 'react';

interface Post {
    title: string;
    content: string;
}

const HomePage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddPost = (title: string, content: string) => {
        setPosts([...posts, { title, content }]);
    };
    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card
                    title="Getting Started"
                    content="Learn the basics of setting up and navigating SoloForge."
                />
                <Card
                    title="Reusable Components"
                    content="Understand how to build and use reusable components in Next.js."
                />
                <Card
                    title="API Integration"
                    content="Fetch and display data from external APIs seamlessly."
                />
            </div>
            <button onClick={() => setIsModalOpen(true)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                Add New Post
            </button>

            <div style={{ marginTop: '20px' }}>
                {posts.map((post, index) => (
                    <Card key={index} title={post.title} content={post.content} />
                ))}
            </div>

            <PostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddPost={handleAddPost}
            />
        </main>
    );
};

export default HomePage;
