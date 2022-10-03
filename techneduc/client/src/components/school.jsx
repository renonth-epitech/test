import { useNavigate } from "react-router-dom";

import '../style/school.scss'

function School({ dto }) {
    const navigate = useNavigate();

    return <div className='school'>
        <div className='title'>
            {dto.name}
        </div>
        <button onClick={() => navigate('/school?id=' + dto.id, { state: { dto: dto } })}>Editer</button>
    </div>
}

export default School;