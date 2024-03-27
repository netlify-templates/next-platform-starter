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
            <div className="bg-white text-neutral-600 card">
                <div className="card-body">
                    {post ? (
                        <>
                            <h3 className="capitalize text-neutral-900 card-title">{post.title}</h3>
                            <p>{post.body}</p>
                            <span className="text-secondary">
                                This card&lsquo;s content is always loaded dynamically from the client - handle with care to avoid layout shifts! (last loaded at {time})
                            </span>
                        </>
                    ) : (
                        'Loading...'
                    )}
                </div>
            </div>
        </section>
    );
}
