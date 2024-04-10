import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [resource, setResource] = useState('posts');
    const [dataList, setDataList] = useState([]);


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => {
                setDataList(response.data);
            })
            .catch(error=> console.log(error));
    }, [resource]);

    return (
        <div className="app">
            <div className="buttons">
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('comments')}>Comments</button>
                <button onClick={() => setResource('users')}>Users</button>
            </div>
            <h1>{ resource }</h1>
            {
                dataList.map(data => {
                    return <pre>
                        { JSON.stringify(data) }
                    </pre>
                })
            }
        </div>
    )
}

export default App
