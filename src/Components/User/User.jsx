import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name, phone, email}= user;
   const userStyle ={
        border: '2px solid yellow',
        padding: '8px',
        margin: '10px',
        borderRadius: '10px',
        backgroundColor: 'aquamarine'
    }
    return (
        <div style={userStyle}>
            <h2>Id: {id}</h2>
            <h2>Name: {name}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default User;