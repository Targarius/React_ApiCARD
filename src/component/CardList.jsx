import React, {useState, useEffect} from 'react';
import Card from './Card';

const CardList = () => {
    const [content, setContent] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=9')
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setContent(c => result)
            setLoaded(true);
        })
    });

    return(
        <> 
            <div className="title_container">
                <h1 className="title_component">Api_CardFlip</h1>
            </div>
            <div className="component_container">
                { loaded ? (content.map((ctn) => (
                    <Card key={ctn.id} email={ctn.email} body={ctn.body} />  
                )))
                    : (<p className="loading">loading ...</p>) 
                }
            </div>
        </>
    );
}

export default CardList;