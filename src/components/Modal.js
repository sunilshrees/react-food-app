import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Modal = ({ id, closeModal }) => {
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState([]);

    const getMealRecipe = async (id) => {
        setLoading(true);
        const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = response.data;

        if (response.status === 200) {
            setRecipe(data.meals);
            setLoading(false);
        }
    };
    useEffect(() => {
        getMealRecipe(id);
    }, [id]);

    if (loading) {
        return (
            <div className='test'>
                <div className='lds-roller'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

    return (
        <div className='test' onClick={closeModal}>
            <div className='meal-details'>
                <button
                    type='button'
                    className='btn recipe-close-btn'
                    onClick={closeModal}>
                    X
                </button>

                <div className='meal-details-content'>
                    <h2 className='recipe-title'>{recipe[0].strMeal}</h2>
                    <p className='recipe-category'>{recipe[0].strCategory}</p>
                    <div className='recipe-instruct'>
                        <h3>Instructions</h3>
                        <p>{recipe[0].strInstructions}</p>
                    </div>
                    <div className='recipe-meal-img'>
                        <img src={recipe[0].strMealThumb} alt='' />
                    </div>
                    <div className='recipe-link'>
                        <a href={recipe[0].strYoutube} target='_blank'>
                            Watch Video
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
