'use client';
import { useEffect, useState } from 'react';

export function Geo() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://ipapi.co/json/');
            const geoData = await res.json();
            setData(geoData);
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div className="mt-8 bg-white text-neutral-900 card">
                    <div className="card-body">
                        <p>
                            User IP: <span className="text-secondary">{data.ip}</span>
                        </p>
                        <p>
                            User Location: <span className="text-secondary">{data.city}</span>, <span className="text-secondary">{data.region}</span>,{' '}
                            <span className="text-secondary">{data.country_name}</span>
                        </p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
