'use client';

import { useState } from 'react';

export default function CachingDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData(refresh = false) {
    setLoading(true);
    try {
      const res = await fetch(`/api/hello${refresh ? '?action=refresh' : ''}`, {
        cache: 'no-store' // ensures client fetch isn’t reusing stale data
      });
      const json = await res.json();
      setData(json);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <button
          onClick={() => fetchData(false)}
          className="rounded bg-neutral-900 text-white px-4 py-2"
        >
          Fetch cached
        </button>
        <button
          onClick={() => fetchData(true)}
          className="rounded bg-blue-600 text-white px-4 py-2"
        >
          Refresh cache
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {data && (
        <pre className="bg-neutral-100  p-4 rounded text-sm overflow-x-auto text-[#515151]">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}