import { store } from 'index'
export const GET_REFERRAL_INFO = 'GET_REFERRAL_INFO'
export const GET_REFERRAL_COMMIT = 'GET_REFERRAL_COMMIT'
export const GET_REFERRAL_ROLLBACK = 'GET_REFERRAL_ROLLBACK'

export const getReferral = () => (dispatch: any) => {
    dispatch({
        type: GET_REFERRAL_INFO,
        meta: {
            offline: {
                effect: {
                    url: `${process.env.REACT_APP_BACKEND_URL}/user/referral`,
                    method: 'GET',
                    headers: { Authorization: `Bearer ${store.getState().auth.jwt}` },
                },
                commit: { type: GET_REFERRAL_COMMIT },
                rollback: { type: GET_REFERRAL_ROLLBACK },
            },
        },
    })
}
