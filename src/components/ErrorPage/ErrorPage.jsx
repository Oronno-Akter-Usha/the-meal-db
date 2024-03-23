import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.satatusText || error.massage}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go Back  where you from</p>
                    <Link to={'/'}><button>Home</button></Link>
                    </div>
            }
        </div>
    );
};

export default ErrorPage;