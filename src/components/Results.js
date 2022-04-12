import React, { useState } from 'react';
import Modal from './Modal';

const Results = ({ mealList }) => {
    const [openModal, setOpenModal] = useState(false);
    const [id, setId] = useState(null);

    const closeModal = () => {
        setOpenModal(false);
    };
    const clickHandle = (id) => {
        setOpenModal(true);
        setId(id);
    };
    return (
        <>
            <div className='meal-result'>
                <h1>Your Search results are:</h1>
                <div id='meal'>
                    {mealList.map((meals) => {
                        const {
                            idMeal: id,
                            strMeal: name,
                            strMealThumb: image,
                        } = meals;
                        return (
                            <div className='meal-item' data-id={id} key={id}>
                                <div className='meal-img'>
                                    <img src={image} alt='food' />
                                </div>
                                <div className='meal-name'>
                                    <h3>{name}</h3>
                                    <button
                                        className='recipe-btn'
                                        onClick={() => clickHandle(id)}>
                                        Get Recipe
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {openModal && <Modal closeModal={closeModal} id={id} />}
        </>
    );
};

export default Results;
