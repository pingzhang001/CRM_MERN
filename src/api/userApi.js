import axios from 'axios';

const rootUrl = "http://10.0.0.206:3001/v1/"
const loginUrl = rootUrl + 'user/login'
const logoutUrl = rootUrl + 'user/logout'
const userProfileUrl = rootUrl + 'user'
export const userLogin = frmData => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(loginUrl, frmData)
      // console.log(result.data)
      resolve(result.data);
      if (result.data.status === "success") {
        sessionStorage.setItem('accessJWT', result.data.accessJWT);
        localStorage.setItem('crmSite', JSON.stringify({refreshJWT:result.data.refreshJWT}));
      }

    } catch (error) {
      reject(error);
    }
  });
};

export const fetchUser = frmData => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem('accessJWT')
      if (!accessJWT) {
        reject("Token not found!")
      }
      const result = await axios.get(userProfileUrl, {
        headers: {
          Authorization:accessJWT
        }
      })
      // console.log(result.data)
      resolve(result.data);
    } catch (error) {
      reject(error);
    }
  });
};

export const userLogout = async() => {
  try {
    await axios.delete(logoutUrl, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT")
      }
    })
  } catch (error) {
    console.log(error)
  }
}