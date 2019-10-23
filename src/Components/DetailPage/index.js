import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ReactJson from 'react-json-view'
import API from '../../Api/CongressPeople';


function DetailPage() {
    const [data, setData] = useState({});
    // TO DO RECEIVE ID FROM PARENT LINK AND FETCH WITH IT
    API.get('members/W000817.json').then(response => {
        console.log('Fetching data...', response.data.results[0]);
        setData(response.data.results[0]);
    });

    return (
        <div>
            <Link to="/" >Back to list</Link>
            {data ? <ReactJson src={data} /> : ''}
        </div>
    );
}

export default DetailPage;