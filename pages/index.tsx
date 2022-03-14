import type { NextPage } from 'next';
import { FormEvent, useState } from 'react';

const Home: NextPage = () => {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = { node_id: 'A', name: 'B', ko: 'C', en: 'D', ja: 'E' };

        const rawResponse = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        const content = await rawResponse.json();

        console.log(process.env.GOOGLE_CLIENT_EMAIL, process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'));
        console.log('res', content);
        // print to screen
        alert(content.data.tableRange);
    };

    return (
        <main>
            <h1>submit spread sheet : )</h1>
            <form className="py-4 space-y-4" onSubmit={handleSubmit}>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </main>
    );
};

export default Home;
