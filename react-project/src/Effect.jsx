import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const baseUrl = "https://jsonplaceholder.typicode.com";

        fetch(`${baseUrl}/posts`)
            .then(response => response.json())
            .then(json => setPosts(json))
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <div>
                <h1>Post</h1>
                <ul>
                    {
                        posts.map((item) => {
                            return <li key={item.id}>{item.title}</li>
                        })
                    }

                </ul>
            </div>
        </div>
    )
}

export default Effect