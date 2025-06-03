import React from 'react';
import { type PostModalProps } from '../../interfaces';


const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onAddPost }) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title') as string;
        const content = formData.get('content') as string;
        onAddPost(title, content);
        onClose();
    };

    return (
        <div style={{ background: 'rgba(0,0,0,0.5)', position: 'fixed', inset: 0 }}>
            <div style={{ background: '#fff', margin: '10% auto', padding: '20px', maxWidth: '400px' }}>
                <h2 className='text-black'>Add New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div >
                        <input name="title" placeholder="Title" required className='mb-4 bold border-3 rounded text-black' />
                    </div>
                    <div>
                        <textarea name="content" placeholder="Content" required className='mb-4 bold border-3 rounded text-black' />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <button type="button" onClick={onClose} className='text-black px-5 cursor-pointer'>Cancel</button>
                        <button type="submit" className='text-black px-5 cursor-pointer'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostModal;
