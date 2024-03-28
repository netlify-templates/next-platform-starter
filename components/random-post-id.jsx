'use client';

import { useEffect, useState } from 'react';
import { getRandomNumber } from '../utils';

export function RandomPostId() {
    const [post, setPost] = useState(null);
    const [time, setTime] = useState(null);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            const randomId = getRandomNumber(1, 100);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}`, { cache: 'no-store' });
                if (response) {
                    const data = await response.json();
                    setPost(data);
                    setTime(new Date().toLocaleString());
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataFromApi();
    }, []);

    return (
        <div className="bg-white card text-neutral-600">
            <div className="card-body">
                {post ? (
                    <>
                        <h3 className="capitalize card-title text-neutral-900">{post.title}</h3>
                        <p>{post.body}</p>
                        <p className="pt-4 mt-2.5 border-t border-dashed text-secondary border-neutral-200">
                            This card&lsquo;s content is always loaded dynamically from the client - handle with care to avoid layout shifts!{' '}
                            <span className="font-mono text-sm">(last loaded at {time})</span>
                        </p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
