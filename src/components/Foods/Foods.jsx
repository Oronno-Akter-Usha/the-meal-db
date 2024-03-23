import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";
import './Foods.css'


const Foods = () => {
    const foods = useLoaderData();
    console.log(foods.meals)

    return (
        <div>
            <h2>Foods</h2>
            <div className="food-container">
                {
                    foods.meals.map((food,i) => <Food key={i} food={food}></Food>)
                }
                
            </div>
        </div>
    );
};

export default Foods;