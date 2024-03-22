import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>Opps!!!</h2>
            <p>{error.statusText || error.massage}</p>
            {
                error.status === 404 && <div> 
                    <h2>page not found</h2>
                    <h3>go back whare you from</h3>
                    <Link to={'/'}><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;