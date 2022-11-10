import axios from 'axios';
// const TUITS_API = 'https://tuiter-node-server-rd.herokuapp.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
console.log(API_BASE);

export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (id) => {
    const response = await axios.delete(`${TUITS_API}/${id}`);
    return response.data;   
} 

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit);
    console.log('response.data', response.data)
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}