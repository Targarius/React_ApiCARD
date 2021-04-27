import React from 'react';

const Card = (props) => {

    return (
        <div className="card">
            <div className="card_hitbox"> 
                <div className="front_card">
                    <span>
                        <h1>Email:</h1>
                        <p>{props.email}</p>
                    </span>
                </div>
                <div className="back_card">
                    <p>{props.body}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;