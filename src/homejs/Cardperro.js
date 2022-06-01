import React from 'react'
import Spinner from './Spinner';

const Cardperro = ({ dog, loading, updateDog }) => {

    if(loading) return <Spinner />

    return (
        <div className="cardperro bounce" onClick={() => updateDog(dog.breed.id)}>
            <img className="perros"
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

export default Cardperro