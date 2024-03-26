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
                const response = await fetch(`https://api-next-template.netlify.app/api/posts/${randomId}`, { cache: 'no-store' });
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
                        This is loaded dynamically from the client. Time: <span className="text-secondary">{time}</span>
                    </p>
                </>
            ) : (
                <div className="bg-white text-neutral-600 card">
                    <div className="card-body">
                        <p className="font-medium">Loading...</p>
                    </div>
                </div>
            )}
        </section>
    );
}
