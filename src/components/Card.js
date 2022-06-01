import React from 'react'
import Spinner from './Spinner';

const Card = ({ dog, loading, updateDog }) => {

    if(loading) return <Spinner />

    return (
        <div className="card bounce" onClick={() => updateDog(dog.breed.id)}>
            <img 
                src={dog.image}
                alt="dog"
                width="30%"
            />
            <p>
                {dog.breed.name}
            </p>
        </div>
    )
}

export default Card