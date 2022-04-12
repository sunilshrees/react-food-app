import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import Results from './Results';

const Search = () => {
    const [meal, setMeal] = useState('');
    const [mealList, setMealList] = useState({});

    const getMeaItem = async (meal) => {
        const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`
        );
        const data = response.data;
        setMealList(data.meals);
    };

    const changeHandler = (e) => {
        setMeal(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        getMeaItem(meal);
        setMeal('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            submitHandler(event);

            console.log('enter key pressed');
        }
    };
    return (
        <>
            <div className='meal-search-box'>
                <input
                    type='text'
                    className='search-control'
                    placeholder='Enter an ingredient'
                    id='search-input'
                    value={meal}
                    onChange={changeHandler}
                    onKeyPress={handleKeyPress}
                />
                <button
                    type='submit'
                    className='search-btn btn'
                    id='search-btn'
                    onClick={submitHandler}>
                    <BsSearch className='search-icon' />
                </button>
            </div>
            <div>
                {mealList ? (
                    <Results />
                ) : (
                    <div>
                        Sorry, we didn't find any meal for your ingredient
                    </div>
                )}
            </div>
        </>
    );
};

export default Search;
