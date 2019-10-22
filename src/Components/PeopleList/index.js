import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from '../SearchInput';


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

const data = [{
    "id": "A000360",
    "title": "Senator, 2nd Class",
    "short_title": "Sen.",
    "api_uri": "https://api.propublica.org/congress/v1/members/A000360.json",
    "first_name": "Lamar",
    "middle_name": null,
    "last_name": "Alexander",
    "suffix": null,
    "date_of_birth": "1940-07-03",
    "gender": "M",
    "party": "R",
    "leadership_role": null,
    "twitter_account": "SenAlexander",
    "facebook_account": "senatorlamaralexander",
    "youtube_account": "lamaralexander",
    "govtrack_id": "300002",
    "cspan_id": "5",
    "votesmart_id": "15691",
    "icpsr_id": "40304",
    "crp_id": "N00009888",
    "google_entity_id": "/m/01rbs3",
    "fec_candidate_id": "S2TN00058",
    "url": "https://www.alexander.senate.gov/public",
    "rss_url": "https://www.alexander.senate.gov/public/?a=RSS.Feed",
    "contact_form": "http://www.alexander.senate.gov/public/index.cfm?p=Email",
    "in_office": true,
    "dw_nominate": 0.323,
    "ideal_point": null,
    "seniority": "15",
    "next_election": "2020",
    "total_votes": 444,
    "missed_votes": 20,
    "total_present": 0,
    "last_updated": "2018-06-08 09:17:29 -0400",
    "ocd_id": "ocd-division/country:us/state:tn",
    "office": "455 Dirksen Senate Office Building",
    "phone": "202-224-4944",
    "fax": "202-228-3398",
    "state": "TN",
    "senate_class": "2",
    "state_rank": "senior",
    "lis_id": "S289",
    "missed_votes_pct": 4.50,
    "votes_with_party_pct": 97.88
},
{
    "id": "B001230",
    "title": "Senator, 1st Class",
    "short_title": "Sen.",
    "api_uri": "https://api.propublica.org/congress/v1/members/B001230.json",
    "first_name": "Tammy",
    "middle_name": null,
    "last_name": "Baldwin",
    "suffix": null,
    "date_of_birth": "1962-02-11",
    "gender": "F",
    "party": "D",
    "leadership_role": null,
    "twitter_account": "SenatorBaldwin",
    "facebook_account": "TammyBaldwin",
    "youtube_account": "witammybaldwin",
    "govtrack_id": "400013",
    "cspan_id": "57884",
    "votesmart_id": "3470",
    "icpsr_id": "29940",
    "crp_id": "N00004367",
    "google_entity_id": "/m/024v02",
    "fec_candidate_id": "S2WI00219",
    "url": "https://www.baldwin.senate.gov",
    "rss_url": "https://www.baldwin.senate.gov/rss/feeds/?type=all",
    "contact_form": "https://www.baldwin.senate.gov/feedback",
    "in_office": true,
    "dw_nominate": -0.536,
    "ideal_point": null,
    "seniority": "5",
    "next_election": "2018",
    "total_votes": 444,
    "missed_votes": 3,
    "total_present": 1,
    "last_updated": "2018-06-14 07:51:00 -0400",
    "ocd_id": "ocd-division/country:us/state:wi",
    "office": "709 Hart",
    "phone": "202-224-5653",
    "fax": "202-225-6942",
    "state": "WI",
    "senate_class": "1",
    "state_rank": "junior",
    "lis_id": "S354",
    "missed_votes_pct": 0.68,
    "votes_with_party_pct": 95.24
}];

function PeopleList(props) {
    const classes = useStyles();
    const [searchResults, setSearchResults] = useState(data);

    

    return (
      <div className="App">
        
        <SearchInput data={data} searchCriteria="all" searchResults={searchResults} setSearchResults={setSearchResults} />
        <table>
            <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Twitter</th>
                    <th>Next election</th>
                </tr>
                {searchResults.map(function(item, key){
                    return (
                        <tr key = {key}>
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