import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";
import { fetchUser } from "../../api/userApi";

export const getUserProfile = () => async dispatch => {
  try {
    dispatch(getUserPending())
    const res = await fetchUser()
    // console.log(res)
    if (res.user) {
      return dispatch(getUserSuccess(res.user))
    }
    dispatch(getUserFail("User is not found!"))
  } catch (error) {
    dispatch(getUserFail(error))
  }
}