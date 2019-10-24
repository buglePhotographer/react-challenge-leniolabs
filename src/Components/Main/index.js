import React, { useState, useEffect, Fragment } from 'react';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PeopleList from '../PeopleList';
import SearchInput from '../SearchInput';
import API from '../../Api/CongressPeople';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    height: '6vh'
  },
}));

let data;

function Main() {
  const classes = useStyles();
  const [filters, setFilters] = useState([]);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  useEffect(() => {
    API.get('115/senate/members.json').then(response => {
      console.log('Fetching data...', response);
      data = response.data.results[0].members;

      let aux = {};
      _.forEach(data[0], (d, index) => {
        aux[index] = "";
      });
      aux['all'] = "";
      setFilters(aux);
    });


  }, []);


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '20vw', display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
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
        {showAdvancedSearch ?
          <Fragment>
            {_.map(data[0], (item, index) => { return <SearchInput searchCriteria={index} filters={filters} setFilters={setFilters} key={index} /> })}
          </Fragment>
          : ''
        }
      </div>
      <div style={{ width: '60vw' }}>
        <PeopleList data={data} filters={filters} />
      </div>
    </div>

  );
}

export default Main;

