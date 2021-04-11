import axios from 'axios';

export const getAllTickets = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(
        'http://10.0.0.206:3001/v1/ticket',
        {
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlaWhlaUBoZWloZWkuY29tIiwiaWF0IjoxNjE4MDEzOTc0LCJleHAiOjE2MjA2MDU5NzR9.7El3N50Z1AccfDVLjUitJXq4u7r_PAcH-bVc7_gXOH0'
          }
        }
      )
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};