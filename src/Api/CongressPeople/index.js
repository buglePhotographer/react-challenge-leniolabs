import axios from 'axios';

export default axios.create({
  baseURL: `https://api.propublica.org/congress/v1/102/80/members.json`,
  headers: {
    'X-API-Key': 'PROPUBLICA_API_KEY'
  }
});