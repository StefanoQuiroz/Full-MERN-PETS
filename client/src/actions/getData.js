import axios from 'axios';

const getData = async() => {
    try{
        const data = await axios.get(`/api/pets`);
        return data;
    }catch(err){
        console.error(err);
    }
}

export default getData;