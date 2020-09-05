import { TOKEN, BASE_URL } from './constants';
let headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

const baseURL = BASE_URL; // Add Base URL


export function post(endpoint, data, type) {
  document.getElementById('overlay-wrapper').style.display = "block";
  let url = `${!type ? baseURL : chatServerUrl}${endpoint}`;
  return new Promise(function (resolve, reject) {
    try {
      if (null === url || undefined === url || '' === url) {
        reject('URL not present.');
      } else {
        const token = TOKEN;
        if (token) {
          headers.Authorization = token;
        }
        const options = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data)
        };
        fetch(url, options)
          .then(res => {
            return res.status !== 204 && res.json()
          })
          .then(res => {
            resolve(res);
          })
          .catch(error => {
            console.error("[Ajax call :: ERROR]", error);
            reject(error)
          });
      }
    } catch (error) {
      reject(error);
    }
  });
}


export async function get(endpoint, type) {
  document.getElementById('overlay-wrapper').style.display = "block";
  let url = `${!type ? baseURL : chatServerUrl}${endpoint}`;
  return new Promise(function (resolve, reject) {
    try {
      if (null === url || undefined === url || '' === url) {
        reject('URL not present.');
      } else {
        const token = localStorage.getItem('accessToken');
        if (token) {
          headers.Authorization = token;
        }
        const options = {
          method: 'GET',
          headers: headers
        };
        fetch(url, options)
          .then(res => res.status !== 204 && res.json())
          .then(res => {
            resolve(res);
          })
          .catch(error => {
            reject(error)
          });
      }
    } catch (error) {
      reject(error)
    }
  });
}

export function put(endpoint, data, type) {
  document.getElementById('overlay-wrapper').style.display = "block";
  let url = `${!type ? baseURL : chatServerUrl}${endpoint}`;
  return new Promise(function (resolve, reject) {
    try {
      if (null === url || undefined === url || '' === url) {
        reject('URL not present.');
      } else {
        const token = localStorage.getItem('accessToken');
        if (token) {
          headers.Authorization = token;
        }
        const options = {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify(data)
        };
        fetch(url, options)
          .then(res => {
            return res.json()
          })
          .then(res => {
            resolve(res);
          })
          .catch(error => {
            console.error("[Ajax call :: ERROR]", error);
            reject(error)
          });
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function patch(endpoint, data) {
  document.getElementById('overlay-wrapper').style.display = "block";
  let url = `${baseURL}${endpoint}`;
  return new Promise(function (resolve, reject) {
    try {
      if (null === url || undefined === url || '' === url) {
        reject('URL not present.');
      } else {
        const token = TOKEN;
        if (token) {
          headers.Authorization = token;
        }
        const options = {
          method: 'PATCH',
          headers: headers,
          body: JSON.stringify(data)
        };
        fetch(url, options)
          .then(res => {
            return res.json()
          })
          .then(res => {
            resolve(res);
          })
          .catch(error => {
            console.error("[Ajax call :: ERROR]", error);
            reject(error)
          });
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function del(endpoint) {
  document.getElementById('overlay-wrapper').style.display = "block";
  let url = `${baseURL}${endpoint}`;
  return new Promise(function (resolve, reject) {
    try {
      if (null === url || undefined === url || '' === url) {
        reject('URL not present.');
      } else {
        const token = TOKEN;
        if (token) {
          headers.Authorization = token;
        }
        const options = {
          method: 'DELETE',
          headers: headers,
          // body: JSON.stringify(data)
        };
        fetch(url, options)
          .then(res => {
            return res.json()
          })
          .then(res => {
            resolve(res);
          })
          .catch(error => {
            console.error("[Ajax call :: ERROR]", error);
            reject(error)
          });
      }
    } catch (error) {
      reject(error);
    }
  });
}

