import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios
    .get(`${baseUrl}/farmers.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        const user = {
          image: userObj.photoUrl,
          uid: userObj.uid,
          name: userObj.displayName,
          email: userObj.email,
          lastSignInTime: userObj.lastSignInTime,
        };
        axios.post(`${baseUrl}/farmers.json`, user);
      } else {
        console.warn('User Exists');
      }
    });
};

export default { getUser };
