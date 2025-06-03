import React from 'react';
import PostCard from '../components/common/PostCard';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostsPageProps {
    posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
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

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}

export default PostsPage;
