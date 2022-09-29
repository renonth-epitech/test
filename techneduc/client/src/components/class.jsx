import { useNavigate } from "react-router-dom"

import '../style/school.scss'

export default function Class({ dto }) {
    const navigate = useNavigate();

    return (
        <div className='school'>
            <div className='title'>
                {dto[dto.displayKey]}
            </div>
            <button onClick={() => navigate('/class?id=' + dto.id, { state: { dto: dto } })}>Editer</button>
        </div>
    )
}