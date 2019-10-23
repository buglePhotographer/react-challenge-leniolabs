import React, { useState, useEffect } from 'react';
import PeopleList from '../PeopleList';
import SearchInput from '../SearchInput';
import Header from '../Header';
import Footer from '../Footer';
import _ from 'lodash';
import myData from '../../data.json';

const data = myData;

function Main() {
    const [filters, setFilters] = useState([]);
  
    useEffect(() => {
        let aux = {};
        _.forEach(data[0], (d, index) => {
          aux[index] = "";
        });
        setFilters(aux);
    }, [data, setFilters]);


    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Header />
        <div>
            {_.map(data[0], (item, index) => {return <SearchInput searchCriteria={index} filters={filters} setFilters={setFilters} />})}
            <PeopleList data={data} filters={filters} />
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Main;

