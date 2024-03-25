export default async function RandomPostAsync() {
    const fetchDataFromApi = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/posts/random`, { cache: 'no-store' });
            if (response) {
                const data = await response.json();
                return data;
            }
        } catch (error) {
            console.log(error);
        }
    };
    const post = await fetchDataFromApi();

    return (
        <section>
            {post && (
                <div className="bg-white text-neutral-600 card">
                    <div className="card-body">
                        <h3 className="capitalize text-neutral-900 card-title">{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
