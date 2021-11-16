import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'

import classnames from 'classnames'

import { Button } from 'app/App.components/Button/Button.controller'

import { ChapterData } from 'pages/Chapter/Chapter.controller'

import { PublicUser } from 'shared/user/PublicUser'

import { chapterData } from '../Courses/near101/Chapters/Chapters.data'
// prettier-ignore
import { 
  BottomInnerContainer,
  BoxImgLogo,
  BoxText,
  CertificateContainer,
  ChaptersContainer,
  ExternalLink,
  InnerContainer,
  Item,
  NotCompleteBox,
  TopInnerContainer,
  UserBadge,
  UserBadgeButtons,
  UserNameContainer,
  UserStyled,
  UserTitle,
  BtnContainer,
  ButtonsContainer,
  CertificateItself
} from './User.style'
import { InputField } from 'app/App.components/Form/InputField/Input.controller'

type UserViewProps = {
  loading: boolean
  user: PublicUser
  authUser?: PublicUser
  downloadCallback: () => void
  issueNftCallback: () => void
  getCertificateCallback: () => void
  name: string,
  accountName: string,
  setName: (e: string) => void,
  setAccountName: (e: string) => void,
}

export const UserView = ({
  loading,
  user,
  authUser,
  downloadCallback,
  name,
  accountName,
  setName,
  setAccountName,
  getCertificateCallback,
  issueNftCallback,
}: UserViewProps) => {

  let badgeUnlocked = false
  let counter = 0
  user.progress?.forEach((chapter) => {
    counter++
  })
  if (counter >= 8) badgeUnlocked = true

  return (
    <UserStyled>
      <UserTitle>
        <h1>Hey, {user?.username}! Check your progress: </h1>
      </UserTitle>
      <InnerContainer>
        <TopInnerContainer>
          <BoxImgLogo />
          <BoxText>
            Free Interactive course for Web2 developers to fast entry into the NEAR protocol
          </BoxText>
        </TopInnerContainer>
        <BottomInnerContainer>
          <ChaptersContainer>
            <div className={'title-box'}>
              <h1 className={'title'}>Chapters</h1>
            </div>
            {chapterData.map((chapter: ChapterData, key: number) => {
              const done = user.progress && user.progress.indexOf(chapter.pathname) >= 0
              return (
                <Item key={key}>
                  <Link to={chapter.pathname} className={classnames(done && 'checked')}>
                    <span className={'number'}>{key + 1}</span>
                    <span className={'name-link'}>{chapter.name}</span>
                  </Link>
                </Item>
              )
            })}
          </ChaptersContainer>
          <CertificateContainer>
            <UserBadge badgeUnlocked={badgeUnlocked}>
              {badgeUnlocked ? (
                <>
                  {authUser?.name ? (<>
                    <CertificateItself>
                      <img alt="certificate" src="/certificate.jpg" />
                      <div>{user.name}</div>
                    </CertificateItself>
                    <UserBadgeButtons>
                      <ButtonsContainer>
                        <div className={'download'}>
                          <Button
                            type="button"
                            text="Download"
                            loading={loading}
                            onClick={() => downloadCallback()}
                          />
                        </div>
                        <div className={'certificateUrl'}>
                          <Link to={`/certificate/${user.username}`}>
                            <Button type="button" text="Get URL" loading={loading} onClick={() => { }} />
                          </Link>
                        </div>

                        {!authUser?.accountName ? (
                          <div className={'issue'}>
                            <Button
                              type="button"
                              text="Issue NFT"
                              loading={loading}
                              onClick={() => issueNftCallback()}
                              color="gradient"
                            />
                          </div>
                          ) : (
                          <p className={'pNFT'}>
                            NFT certificate was issued to:
                            <a href="https://explorer.testnet.near.org/accounts/test.museum-nft.testnet"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                            >
                              <ExternalLink>{authUser.accountName}</ExternalLink>
                            </a>
                          </p>
                        )}
                      </ButtonsContainer>
                    </UserBadgeButtons>
                  </>
                  ) : (
                    <UserNameContainer>
                      <div className={'wrapp'}>
                        <div className={'title'}>
                          To whom should your certificate be emitted?
                        </div>
                        <div className={'box-input'}>
                          <InputField
                            label="Name"
                            type="text"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value)
                            }}
                            onBlur={() => { }}
                            name="name"
                            inputStatus={undefined}
                            errorMessage={undefined}
                            isDisabled={false}
                            isName
                          />
                        </div>
                        <BtnContainer>
                          <Button text="Get your certificate" color="gradient" type="button" loading={loading} onClick={() => getCertificateCallback()} />
                        </BtnContainer>
                      </div>
                    </UserNameContainer>
                  )}
                </>
              ) : (
                <NotCompleteBox>To obtain the completion certificate, you need to complete all chapters.</NotCompleteBox>
              )}
            </UserBadge>
          </CertificateContainer>
        </BottomInnerContainer>
      </InnerContainer>
    </UserStyled>
  )
}

UserView.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object,
}

UserView.defaultProps = {
  loading: false,
  user: {
    username: 'Not found',
    karmaTotal: 0,
  },
}
