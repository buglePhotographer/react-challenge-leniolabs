import axios from 'axios';

export default axios.create({
  baseURL: `https://api.propublica.org/congress/v1/`,
  headers: {
    'X-API-Key': '233UTVY9BsRBYj5YdpAJdb0OvOmAFV0nfmjJvFYw'
  }
});