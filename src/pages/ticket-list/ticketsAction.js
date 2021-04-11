import { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets } from './ticketSlice'
import {getAllTickets} from '../../api/ticketApi'

export const fetchAllTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await getAllTickets();
    // console.log(result)
    dispatch(fetchTicketSuccess(result.data.result))
  } catch (error) {
    // console.log(error)
    dispatch(fetchTicketFail(error.message))
  }
}

export const filterSearchTicket = str => dispatch => {
  dispatch(searchTickets(str));
}