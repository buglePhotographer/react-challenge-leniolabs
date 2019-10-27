import React, { useState, useEffect, Fragment } from 'react';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PeopleList from '../PeopleList';
import SearchInput from '../SearchInput';
import API from '../../Api/CongressPeople';
import { Grid } from '@material-ui/core';

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
  const [layout, setLayout] = useState('row');


  useEffect(() => {
    if(window.innerWidth < 600){
      setLayout('column')
    }

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
    <div style={{ display: 'flex', flexDirection: `${layout}` }}>
      <Grid item xs={12} md={2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
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
      </Grid>
      <Grid item xs={12} md={1}></Grid>
      <Grid item xs={12} md={8} style={{ }}>
        <PeopleList data={data} filters={filters} />
      </Grid>
    </div>

  );
}

export default Main;

