'use client';

import { useState } from 'react';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <div className="w-full bg-white text-neutral-600 card md:max-w-md">
            <div className="card-body">
                <h3 className="text-neutral-900 card-title">Leave Feedback</h3>
                <form
                    name="feedback"
                    onSubmit={handleFormSubmit}
                    className="flex flex-col gap-3 align-center"
                >
                    <input type="hidden" name="form-name" value="feedback" />
                    <input name="name" type="text" placeholder="Name" required className="input input-bordered" />
                    <input name="email" type="text" placeholder="Email (optional)" className="input input-bordered" />
                    <input name="message" type="text" placeholder="Message" required className="input input-bordered" />
                    <button className="btn btn-primary" type="submit" disabled={status === 'pending'}>
                        Submit
                    </button>
                    {status === 'ok' && (
                        <div className="alert alert-success">
                            <SuccessIcon />
                            Submitted!
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="alert alert-error">
                            <ErrorIcon />
                            {error}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-current shrink-0"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
function ErrorIcon(success) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-current shrink-0"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
