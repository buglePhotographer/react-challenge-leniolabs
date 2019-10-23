import React from 'react';


function PeopleList(props) {
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