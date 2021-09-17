import getUsers from '../service/getUserService'
import { GET_USERS } from './types'

export const fetchUsers = () => dispatch => {
    getUsers().then(users => {
        dispatch({
            type: GET_USERS,
            payload: users
        })
    })
}