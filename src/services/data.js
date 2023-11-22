import get from "../makeRequest";



export function getDataFun(){
    console.log('i am here');
    return get("https://newsapi.org/v2/top-headlines?country=in&apiKey=cf9c53c1e6bc41d78f44c6a1591051fe");
}