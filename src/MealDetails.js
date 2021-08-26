import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";

const MealDetails = () =>{
    const params = useParams()
    const [meal, setMeal] = useState({})
    useEffect(()=>{
        axios(`https://gist.githubusercontent.com/juravlevdima/b239931140d1c3ae402a87b130f2caa6/raw/2aeee347830d20ec0720293d32905b0ae359526c/food.json`)
            .then(({data}) => setMeal(data.find(item => item.id === params.id)))
    }, [])
    return (
        <div className='meal-content'>
            <img src={meal.image} alt=""/>
            <div className='meal-title'>Meal name: {meal.title}</div>
            <div className='meal-desc'>A little description: {meal.description}</div>
            <div>Price: {meal.price}</div>
            <div>Availability: {meal.inStock ? "yes" : "no"}</div>
        </div>
    )
}
export default MealDetails;