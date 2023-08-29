import {useParams} from "react-router";

const CFAPage = () => {
    const params = useParams();

    return (
        <div>{params.cfaId}</div>
    );
}

export default CFAPage;
