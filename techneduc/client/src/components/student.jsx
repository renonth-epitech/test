import { useNavigate } from "react-router-dom";

import '../style/school.scss'

function Student({ dto }) {
    const navigate = useNavigate();

    return <div className='school'>
        <div className='title'>
            {dto[dto.displayKey]}
        </div>
        <button onClick={() => navigate('/student', { state: { dto: dto } })}>Editer</button>
    </div>
}

export default Student;