import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';


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

function PeopleList(props) {
    const classes = useStyles();
    const { filters, data } = props;
    let filteredResults = data;
    Object.keys(filters).forEach(key => {
      filteredResults = filteredResults.filter(item => {
        return item[key] && item[key].toString().toLowerCase().includes(filters[key].toLowerCase()) || filters[key] === '';
        // return item[key] && item[key].toString().toLowerCase().indexOf(filters[key].toLowerCase()) > -1;
      });
    });

    return (
        <div className="App">
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Twitter</th>
                        <th>Next election</th>
                    </tr>
                    {filteredResults && filteredResults.map(function (item, key) {
                        return (
                            <tr key={key}>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.twitter_account}</td>
                                <td>{item.next_election}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PeopleList;