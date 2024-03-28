export const metadata = {
    title: 'Revalidation'
};

async function getTime() {
    const res = await fetch('http://worldtimeapi.org/api/timezone/Europe/Riga', { next: { revalidate: 3 } });
    return res.json();
}

async function getRepo() {
    const res = await fetch('https://api.github.com/repos/netlify/cli');
    return res.json();
}

export default async function Page() {
    const [time, data] = await Promise.all([getTime(), getRepo()]);
    return (
        <>
            <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl sm:mb-12">Revalidation</h1>
            <div className="bg-white rounded card text-neutral-600">
                <div className="card-body">
                    <p>
                        Time: <span className="text-secondary">{time.datetime}</span>
                    </p>
                    <p>
                        Repo: <span className="text-secondary">{data.full_name}</span>
                    </p>
                </div>
            </div>
        </>
    );
}
