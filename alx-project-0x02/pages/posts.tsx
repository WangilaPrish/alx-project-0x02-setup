import React, { useEffect, useState } from 'react';
import PostCard from '../components/common/PostCard';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const PostsPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-4">Posts</h1>
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    content={post.body}
                    userId={post.userId}
                />
            ))}
        </main>
    );
};

export default PostsPage;
