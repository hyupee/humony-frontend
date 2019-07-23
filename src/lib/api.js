import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export function sendImage (formData) {
    return axios.post(`${API_URL}/inpic/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    });
};

export function sendColor (params) {
  return axios.post(`${API_URL}/outpic/`, params, {
    headers: {
      'Content-Type': 'application/json'
    }
});
}