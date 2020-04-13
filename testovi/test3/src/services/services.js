import Axios from "axios";

const baseURL = 'https://api.spacexdata.com/v3';

export const companyInfoAx = () => {
    return Axios.get(`${baseURL}/info`);
}

export const getShips = () => {
    return Axios.get(`${baseURL}/ships`);
}