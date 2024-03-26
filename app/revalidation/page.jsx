export const metadata = {
    title: 'Revalidation'
};

async function getTime() {
    const res = await fetch('http://worldtimeapi.org/api/timezone/Europe/Riga', 
    { next: 
        { revalidate: 3 } 
    }
    );
    return res.json();
}

async function getRepo() {
    const res = await fetch('https://api.github.com/repos/netlify/cli');
    return res.json();
}


export default async function Page() {
    const[time, data] = await Promise.all([getTime(), getRepo()]);
    return (
        <section className="mb-16 sm:mb-24">
            <header className="mb-16 sm:mb-24">
                <h1 className="mb-6 text-2xl font-bold sm:text-2xl">Time: {time.datetime}</h1>
                <h2 className="mb-6 text-4xl font-bold sm:text-5xl">Repo: {data.full_name}</h2>
            </header>
        </section>
    );
}
