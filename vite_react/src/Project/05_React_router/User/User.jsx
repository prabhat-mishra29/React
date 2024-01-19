import { useParams } from "react-router-dom";

function User() {
    const {userID}=useParams();
    return ( 
        <div className="bg-gray-600 text-3xl text-white p-4 text-center">
            user:{userID}
        </div>
     );
}

export default User;