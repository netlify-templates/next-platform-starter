'use client';

import { useEffect, useState } from 'react';

const randomQuoteUrl = '/quotes/random';

export function RandomQuote() {
    const [quote, setQuote] = useState(null);
    const [time, setTime] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch(randomQuoteUrl, { cache: 'no-store' });
                if (response) {
                    const data = await response.json();
                    setQuote(data);
                    setTime(new Date().toLocaleString());
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchQuote();
    }, []);

    return (
        <div className="bg-white card text-neutral-600">
            <div className="card-body">
                {quote ? (
                    <>
                        <h3 className="text-xl font-bold text-neutral-900">&ldquo;{quote.text}&rdquo;</h3>
                        <p>
                            &mdash; {quote.playedBy} as {quote.character} in &ldquo;{quote.film}&rdquo; ({quote.year})
                        </p>
                        <p className="pt-2.5 mt-2.5 border-t border-dashed text-secondary border-neutral-200 text-sm italic">
                            loaded at {time}. <a href={quote.dataSource}>Original data source.</a>
                        </p>
                    </>
                ) : (
                    <div className="card-body">Loading...</div>
                )}
            </div>
        </div>
    );
}
