import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoints, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://dummyjson.com/${endpoints}`
      };

      const fetchData = async () => {
        setIsLoading(true);

        try{
            const response = await axios.request(options);
            setData(response.data);
            setIsLoading(false)
        }catch(error){
            setError(error);
        }finally{
            setIsLoading(false)
        }
      }

      useEffect(() =>{
        fetchData();
      }, []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return{
        data, isLoading, error, refetch
      }
}

export default useFetch;