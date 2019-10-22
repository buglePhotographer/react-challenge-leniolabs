import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
}));

function SearchInput(props) {
    const classes = useStyles();
    const { data, searchCriteria, searchResults, setSearchResults } = props;
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = e => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);

        //TO DO FIX SEARCH ALL PROPERTIES
        
        if(searchCriteria === 'all'){
          if(searchTerm){
            setSearchResults(data.filter(function(obj) {
              return Object.keys(obj).some(function(key) {
                  return obj[key] && obj[key].toString().indexOf(searchTerm) > -1;
              })
            }));
          }
          else{
            setSearchResults(data);
          }
        }
    };

    return (
        <TextField
            id="outlined-with-placeholder"
            placeholder="Search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={searchTerm}
            onChange={handleInputChange}
        />
    )
}

export default SearchInput;