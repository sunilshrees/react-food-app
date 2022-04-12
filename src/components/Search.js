import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import Results from './Results';

const Search = () => {
    const [meal, setMeal] = useState('');
    const [mealList, setMealList] = useState();

    const getMealItem = async (meal) => {
        if (!meal.length) return;
        const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`
        );
        const data = response.data;
        setMealList(data.meals);
        setMeal('');
    };

    const submitHandler = (e) => {
        e.preventDefault();
        getMealItem(meal);
    };

    // const handleKeyPress = (event) => {
    //     if (event.key === 'Enter') {
    //         submitHandler(event);
    //     }
    // };
    return (
        <>
            <form className='meal-search-box' onSubmit={submitHandler}>
                <input
                    type='text'
                    className='search-control'
                    placeholder='Enter an ingredient'
                    value={meal}
                    onChange={(e) => setMeal(e.target.value)}
                    // onKeyPress={handleKeyPress}
                />
                <button type='submit' className='search-btn btn'>
                    <BsSearch className='search-icon' />
                </button>
            </form>

            {mealList ? <Results mealList={mealList} /> : null}
        </>
    );
};

export default Search;
