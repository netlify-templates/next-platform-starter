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
        <div className="bg-white rounded card text-neutral-600">
            <div className="card-body">
                {data ? (
                    <>
                        <p>
                            User IP: <span className="text-secondary">{data.ip}</span>
                        </p>
                        <p>
                            User Location: <span className="text-secondary">{data.city}</span>, <span className="text-secondary">{data.region}</span>, <span className="text-secondary">{data.country_name}</span>
                        </p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
