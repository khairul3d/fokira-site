import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    
    const user = useLoaderData();
    const navigaite = useNavigate()
    const {name,email}  = user;

    const handleGoback= () =>{
      navigaite(-1)
    }

    return (
        <div>
            <h2>User Details:  {name}</h2>
            <p>Email:  {email}</p>
            <button onClick={handleGoback}>Go Back</button>
            
        </div>
    );
};

export default UserDetails;