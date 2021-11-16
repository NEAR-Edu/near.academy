import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import { State } from "./Invite.actions";
import { State } from '../../reducers'
// import { InviteView } from 'react'
import { InviteView } from './Invite.view'

export const Invite = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.auth.user)

  // useEffect(() => {
  //     dispatch(getReferral())
  // }, [dispatch])

  const onCopy = (text: string, result: boolean) => {
    console.log(text, result)
    dispatch(showToaster('success', '', 'link copied'))
  }

  return <InviteView user={user} onCopy={onCopy} />
}
