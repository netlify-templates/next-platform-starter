export async function RandomPost() {
    
    const currentEnv = process.env.NODE_ENV;

    let apiUrl;
    if (currentEnv === 'development') {
        apiUrl = 'http://localhost:3000/api/posts/random';
    } else {
        apiUrl = 'https://api-next-template.netlify.app/api/posts/random';
    }

    const fetchDataFromApi = async () => {
        try {
            const response = await fetch(apiUrl, { cache: 'no-store' });
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
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}
