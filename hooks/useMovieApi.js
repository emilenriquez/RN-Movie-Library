import { useState, useEffect } from 'react';


// TODO: use env var?
const apiKey = '1ae2bf0aa661436604996588d03309a7'

// TODO: abstract the api
const useMovieApi = (url) => {

  console.log({
    url
  })
  const [data, setData] = useState([]);
  const [paginationDetails, setPaginationDetails] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${url}?api_key=${apiKey}`;
        console.log(apiUrl);
        const response = await fetch(apiUrl);
        const result = await response.json();
        console.log({result});
        setData(result.results);
        setPaginationDetails({
          page: result.page,
          totalPages: result.total_pages,
          totalResults: result.total_results,
        })
      } catch ( error ) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, paginationDetails, isLoading, error };
}

export default useMovieApi;