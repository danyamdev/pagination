import React, { useState, useEffect } from 'react';


const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(20);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const res = await axios.get('...');
      setCountries(res.data);
      setLoading(false);
    }

    getCountries();
  }, [])

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

  const nextPage = () => setCurrentPage( prev => prev + 1 );
  const prevPage = () => setCurrentPage( prev => prev - 1 );

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Countries</h1>
      <Countries countries={currentCountry} loading={loading}/ >
    
      <button className="btn" onClick={prevPage}>Prev Page</button>
      <button className="btn" onClick={nextPage}>Next Page</button>
    </div>
  )
};

export default App;