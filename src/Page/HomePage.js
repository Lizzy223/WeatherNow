
import { useEffect, useState } from 'react';
import './Homepage.css';
import axios from 'axios';
import pic from '../assets/promo-figure-alt.svg'
import Skeleton from '../component/Skeleton';
import Header from '../component/Header';
import Search from '../component/Search';
import WeatherContainer from '../component/WeatherContainer';


function HomePage() {
  const [country, setCountry] = useState('');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false)
  const [error, setError] = useState(null)

  const API = process.env.REACT_APP_API_URL;
  const ProjectId = process.env.REACT_APP_PROJECT_ID;


  useEffect(() => {
    const handleCountry = () => {
      setLoading(true);
      if (country.length > 1) {
        axios.get(`${API}?key=${ProjectId}&q=${country}`)
          .then((res) => {
            setLoading(false);
            setData(res.data);
            setFetched(true);
            setError('');
          })
          .catch((err) => {
            setLoading(false);
            setError(err?.response?.statusText || 'An error occurred');
            console.log(err);
          });
      };
    };
    const getData = setTimeout(() => {
      handleCountry();
    }, 3000);

    return () => clearTimeout(getData);
  }, [API, ProjectId, country]);

  return (
    <div className='big-container'>
      <Header pic={pic} />
      <div className="container" >
        <Search country={country} setCountry={setCountry} error={error} />
        {
          loading ?
            <Skeleton />
            :
            fetched && <WeatherContainer data={data} fetched={fetched} />
        }
      </div>
    </div>
  );
}

export default HomePage;
