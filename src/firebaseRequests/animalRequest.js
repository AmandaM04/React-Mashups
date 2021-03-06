import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/mashups.json`)
      .then((res) => {
        const animals = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach((key) => {
            res.data[key].id = key;
            animals.push(res.data[key]);
          });
        }
        resolve(animals);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const postRequest = (animal) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/mashups.json`, animal)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { getRequest, postRequest };
