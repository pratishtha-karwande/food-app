import {useParams} from 'react-router-dom'

const Hotels = () => {

    const { hotelId } = useParams();


    return (
        <h2>Hello world hotel {hotelId}</h2>
    )
}


export default Hotels