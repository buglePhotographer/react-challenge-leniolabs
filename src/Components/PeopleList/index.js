import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: '2vh'
    },
    table: {
        minWidth: 650,
    },
});


function PeopleList(props) {
    const classes = useStyles();
    const { filters, data } = props;
    let filteredResults = data;
    Object.keys(filters).forEach(key => {
        if (key === 'all') {
            filteredResults = filteredResults.filter(function (obj) {
                return Object.keys(obj).some(function (key) {
                    return obj[key] && obj[key].toString().toLowerCase().includes(filters['all'].toLowerCase()) || filters['all'] === '';
                })
            });
        }
        else {
            filteredResults = filteredResults.filter(item => {
                return item[key] && item[key].toString().toLowerCase().includes(filters[key].toLowerCase()) || filters[key] === '';
            });
        }
    });

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>First Name</strong></TableCell>
                        <TableCell align="center"><strong>Last Name</strong></TableCell>
                        <TableCell align="center"><strong>Twitter</strong></TableCell>
                        <TableCell align="center"><strong>Next election</strong></TableCell>
                        <TableCell align="center"><strong>ID</strong></TableCell>
                        <TableCell align="center"><strong>View more</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredResults && filteredResults.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.first_name}
                            </TableCell>
                            <TableCell align="center">{row.last_name}</TableCell>
                            <TableCell align="center">{row.twitter_account}</TableCell>
                            <TableCell align="center">{row.next_election}</TableCell>
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell align="center"><Link to={`/congressmanDetail/${row.id}`}>View more</Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default PeopleList;