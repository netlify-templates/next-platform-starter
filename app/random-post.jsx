'use client';

import { useEffect, useState } from 'react';
import { getRandomNumber } from '../utils';

export default function RandomPost() {
    const [post, setPost] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);

    useEffect(() => {
        const getPost = async () => {
            const randomPostId = getRandomNumber(1, 100);
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`, { cache: 'no-store' });
            const postData = await res.json();
            setPost(postData);
            setCurrentTime(new Date().toLocaleString());
        };

        getPost();
    }, []);

    return (
        <section>
            {post ? (
                <>
                    <div className="bg-white text-neutral-600 card">
                        <div className="card-body">
                            <h3 className="capitalize text-neutral-900 card-title">{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <p className="mt-6 font-medium text-white">
                        This is loaded dynamically from the client. Time: <span className="text-secondary">{currentTime}</span>
                    </p>
                </>
            ) : (
                <p className="font-medium">Loading...</p>
            )}
        </section>
    );
}
