import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PeopleList from '../PeopleList';
import SearchInput from '../SearchInput';
import Header from '../Header';
import Footer from '../Footer';
import _ from 'lodash';
import myData from '../../data.json';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const data = myData;

function Main() {
  const classes = useStyles();
  const [filters, setFilters] = useState([]);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  useEffect(() => {
    let aux = {};
    _.forEach(data[0], (d, index) => {
      aux[index] = "";
    });
    aux['all'] = "";
    setFilters(aux);
  }, [data, setFilters]);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header />
      <div>
        <div>
          <SearchInput searchCriteria='all' filters={filters} setFilters={setFilters} />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<SearchIcon></SearchIcon>}
            onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
          >
            Advanced Search
          </Button>
        </div>
        {showAdvancedSearch ?
          <div>
            {_.map(data[0], (item, index) => { return <SearchInput searchCriteria={index} filters={filters} setFilters={setFilters} /> })}
          </div>
          : ''}
        <PeopleList data={data} filters={filters} />
      </div>
      <Footer />
    </div>
  );
}

export default Main;

