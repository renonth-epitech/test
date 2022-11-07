import { useNavigate } from "react-router-dom"

import '../style/school.scss'

export default function Class({ dto }) {
    const navigate = useNavigate();
    console.log(dto)
    return (
        <div className='school'>
            <div className='title'>
                {dto.o.name}
            </div>
            <button onClick={() => navigate('/class?id=' + dto._id, { state: { dto: dto } })}>Editer</button>
        </div>
    )
}