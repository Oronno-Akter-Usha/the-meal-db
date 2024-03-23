import { useLoaderData, useNavigate } from "react-router-dom";


const FoodDetails = () => {
    const food = useLoaderData();
    console.log(food);
    const {strMeal, strArea, strInstructions}= food.meals[0];

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>Name: {strMeal}</h2>
            <p>Area: {strArea}</p>
            <p><small>{strInstructions}</small></p>
            <button onClick={handleGoBack}>Go Back</button>

        </div>
    );
};

export default FoodDetails;