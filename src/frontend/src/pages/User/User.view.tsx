import classnames from 'classnames'
import { Formik } from 'formik';
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';

import { Button } from 'app/App.components/Button/Button.controller'
import { InputField } from 'app/App.components/Form/InputField/Input.controller'
import { ChapterData } from 'pages/Chapter/Chapter.controller'
import { PublicUser } from 'shared/user/PublicUser'

import { chapterData } from '../Courses/near101/Chapters/Chapters.data'
// prettier-ignore
import { BottomInnerContainer, BoxImgLogo, BoxText, BtnContainer, ButtonsContainer, CertificateContainer, CertificateItself, ChaptersContainer, ExternalLink, InnerContainer, IssueContainer, Item, NotCompleteBox, Row, TopInnerContainer, UserBadge, UserBadgeButtons, UserNameContainer, UserStyled, UserTitle } from './User.style'

const ValidationSchema = Yup.object().shape({
  accountName: Yup.string()
    .matches(/^[a-zA-Z0-9_.-]*.testnet$/, 'Account name can contain lowercase characters, digits, characters (_-) can be used as separators and must end with .testnet')
    .min(2, 'Account name must be longer than or equal to 2 characters')
    .max(64, 'Account name must be shorter than or equal to 64 characters (including .testnet)')
    .required('This field is required!'),
});

export interface IFormInputs {
  accountName: string,
}

type UserViewProps = {
  loading: boolean
  user: PublicUser
  authUser?: PublicUser
  downloadCallback: () => void
  issueNftCallback: (values: IFormInputs) => void
  getCertificateCallback: (user: PublicUser) => void
  name: string,
  setName: (e: string) => void,
}

export const UserView = ({
  loading,
  user,
  authUser,
  downloadCallback,
  name,
  setName,
  getCertificateCallback,
  issueNftCallback,
}: UserViewProps) => {

  const initialValues: IFormInputs = {
    accountName: '',
  };

  let badgeUnlocked = false
  let counter = 0
  user.progress?.forEach((chapter) => {
    counter++
  })
  if (counter >= 8) badgeUnlocked = true

  const handleSubmit = (values: IFormInputs) => {
    issueNftCallback(values)
  }

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
                        {authUser?.accountName ? (
                          <div className={'pNFT'}>
                            <span>NFT certificate:</span>
                            <a href="https://explorer.testnet.near.org/accounts/test.museum-nft.testnet"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                            >
                              <ExternalLink>{authUser.accountName}</ExternalLink>
                            </a>
                          </div>
                        ): null}
                        
                      </ButtonsContainer>
                      <IssueContainer>
                        {!authUser?.accountName ? (
                          <Formik
                            initialValues={initialValues}
                            validationSchema={ValidationSchema}
                            onSubmit={handleSubmit}
                          >
                            {({
                              values,
                              errors,
                              touched,
                              setFieldValue,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              isValid
                            }) => (
                              <form onSubmit={handleSubmit}>
                                <Row className={classnames(errors.accountName && touched.accountName && 'isError')}>
                                  <div className={'box-input'}>
                                    <InputField
                                        label="Account Name"
                                        type="text"
                                        value={values.accountName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="accountName"
                                        inputStatus={
                                          errors.accountName && touched.accountName
                                            ? 'error' : !errors.accountName && touched.accountName 
                                            ? 'success' : undefined
                                          }
                                        errorMessage={errors.accountName && touched.accountName && errors.accountName}
                                        isDisabled={false}
                                        isAccountName
                                      />
                                  </div>
                                  <div className={'issue'}>
                                    <Button
                                      text="Issue NFT"
                                      color="gradient"
                                      type="submit"
                                      loading={loading}
                                      isDisabled={!values.accountName || !!errors.accountName}
                                    />
                                  </div>
                                </Row>
                              </form>
                            )}
                          </Formik>
                        ) : null}
                      </IssueContainer>
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
                          <Button text="Get your certificate" color="gradient" type="button" loading={loading} onClick={() => getCertificateCallback(user)} />
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
