import {useParams} from "react-router"

const UserPage = () => {
    const params = useParams();

    return (
        <div>
            {params.userId}
        </div>
    );
}

export default UserPage;