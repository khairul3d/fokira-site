import { Outlet, useNavigation } from "react-router-dom";
import Navber from "./Navber/Navber";



const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <h1 className="text-center">hello from js</h1>
            <Navber></Navber>
            {
                navigation.state === "loading" ? <p>loading...</p>:
                <Outlet></Outlet>
            }
           
          
       
        </div>
    );
};

export default Home;