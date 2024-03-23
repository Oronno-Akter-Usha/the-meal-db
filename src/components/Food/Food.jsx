import './Food.css'
import { Link } from 'react-router-dom';

const Food = ({food}) => {
    const {idMeal ,strMeal, strArea} = food;
    return (
        <div className='food'>
            <h2>Name: {strMeal}</h2>
            <p>Area: {strArea}</p>
            <Link to={`/food/${idMeal}`}>Show more details</Link>
        </div>
    );
};

export default Food;