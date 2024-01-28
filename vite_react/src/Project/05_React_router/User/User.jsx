import { useParams } from "react-router-dom";

function User() {
    const {userID}=useParams();
    //Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
    return ( 
        <div className="bg-gray-600 text-3xl text-white p-4 text-center">
            User : {userID}
        </div>
     );
}

export default User;