import { MainFooter } from 'app/App.components/MainFooter/MainFooter.controller'
import * as React from 'react'
import { useState } from 'react'
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'

import { Button } from '../../app/App.components/Button/Button.controller'
//prettier-ignore
import { InviteContainer, InvitePage, InviteStyled } from './Invite.style'

export const InviteView = ({ user, onCopy }: any) => {
  const [value, setValue] = useState(`https://near.academy/sign-up?referral=${user?.username}`)

  return (
    <InviteStyled>
      <InvitePage>
        <InviteContainer>
          <h1>Referral Program</h1>

          <p>
            NEAR Academy is free and it will always be. For all our registered users, we thought that implementing a
            referral system would be the most effective way to grow together.
          </p>

          <p>
            What can you expect from the Academy’s referral system? Some NEAR every time your referred friend claims the
            certificate.
          </p>
          <p>
            We are currently still testing this feature. You can collect rewards, but payouts are frozen for the first
            two weeks to make sure that the system is operating as intended.
          </p>
          {/* <InviteContainer style={{ textAlign: "center", paddingTop: "10px" }}><button disabled> CLAIM NEAR </button></InviteContainer> */}
          {user ? (
            <ul>
              <li>
                <p>Pending</p>
                <p>{user.stats.pending}</p>
              </li>
              <li>
                <p>Completed</p>
                <p>{user.stats.completed}</p>
              </li>
              <li>
                <p>Open Reward</p>
                <span>{1 * user.stats.completed} NEAR</span>
              </li>
            </ul>
          ) : null}
          {user ? (
            <form action="">
              <div className="input">
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
                <CopyToClipboard text={value} onCopy={onCopy}>
                  <a href="/#" className="copy-button">copy</a>
                </CopyToClipboard>
              </div>
              <p>
                Share this link with your friends and earn NEAR. For each newly registered user that finishes the NEAR
                Academy you will get 1 NEAR
              </p>
            </form>
          ) : null}

          <h1>What do you have to do?</h1>
          <p>
            Simply share your link! During the registration process, the Referral ID will be automatically filled with
            your username - this way is faster for your friends and family to sign up!
          </p>

          <p>There is another way to increase your NEAR rewards: by openly contributing to our repo on github</p>

          <p>
            Submit your PR on github:
            <a href="https://github.com/101labs-tech/near-academy"> https://github.com/101labs-tech/near-academy </a>
            If your PR is accepted, then share it here{' '}
            <a href="https://x2muu8nc82s.typeform.com/to/JFQB14AF"> https://x2muu8nc82s.typeform.com/to/JFQB14AF </a>
            with your NEAR wallet address and wait for those NEAR to flow in.
          </p>
          {!user ? (
            <Link className={'get-started'} to="/sign-up">
              <Button text="SIGN UP" color="secondary" />
            </Link>
          ) : null}
        </InviteContainer>
      </InvitePage>
      <img src={'museum_interior_x2.svg'} alt="museum interior" />
      <MainFooter />
    </InviteStyled>
  )
}
