export async function RandomPost() {
    const fetchDataFromApi = async () => {
        try {
            const response = await fetch(`https://api-next-template.netlify.app/api/posts/random`, { cache: 'no-store' });
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
        <div className="bg-white card text-neutral-600">
            <div className="card-body">
                {post ? (
                    <>
                        <h3 className="capitalize card-title text-neutral-900">{post.title}</h3>
                        <p>{post.body}</p>
                        <p className="pt-4 mt-2.5 border-t border-dashed text-secondary border-neutral-200">
                            This card&lsquo;s content is always loaded dynamically from the client - handle with care to avoid layout shifts!
                        </p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
