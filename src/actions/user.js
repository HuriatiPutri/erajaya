import * as Query from '../utils/query';

export const GetUsers = (callback) => {
    const options = {
      url: 'https://614d6dbfe3cf1f001712d120.mockapi.io/api/v1/help/users',
      method: 'GET',
      key: 'GetUsers',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data = Query.GetData(options, callback);
    return data;
  };