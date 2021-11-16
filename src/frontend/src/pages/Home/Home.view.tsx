import * as React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'app/App.components/Header/Header.controller'
import { MainFooter } from 'app/App.components/MainFooter/MainFooter.controller'
import { Button } from 'app/App.components/Button/Button.controller'

//prettier-ignore
import { HomeContainer, HomePage, HomeStyled } from './Home.style'


export const HomeView = () => {
  return (
    <HomeStyled>
      <Header />
      <HomePage>
        <HomeContainer>
          <section className={'main'}>
            <div className={'left'} />
            <div className={'right'}>
              <h1 className={'title'}>
                <div className={'title_sub'}>Learn how to</div>
                <div className={'title_bg'}>build Web3 dApps on NEAR Blockchain Protocol</div>
                <div className={'title_sub'}>with fun and free interactive courses</div>
              </h1>
              <p className={'text'}>NEAR Academy is an interactive course for web developers looking
                to explore blockchain integration with their Apps.</p>
              <p className={'text'}>It is free and ends with a certificate of completion.</p>

              <a className={'get-started'} href="#freeCourse">
                <Button text="Start learning" color="primary"/>
              </a>
            </div>
          </section>
          <div className={'wrapp_card'}>
            <div className={'box-inner'}>
              <div className={'card_title'}>
                Learn for free and get bounties
              </div>
              <div className={'card_items'}>
                <div className={'card_item'}>
                  <div className={'card_item-title'}>
                    <div className={'box-img'}>
                      <img src="icons/nft_certificates.svg" alt="" width="32px" height="28px" />
                    </div>
                    <div className={'title'}>
                      NFT Certificates
                    </div>
                  </div>
                  <div className={'card_item-text'}>
                    Complete the course and receive your certificate as a Non-Fungible Token
                  </div>
                </div>
                <div className={'card_item'}>
                  <div className={'card_item-title'}>
                    <div className={'box-img'}>
                      <img src="icons/learn2earn.svg" alt="" width="34px" height="33px" />
                    </div>
                    <div className={'title'}>
                      Learn 2 Earn
                    </div>
                  </div>
                  <div className={'card_item-text'}>
                    Get your NEAR mainnet account created for free on course completion
                  </div>
                </div>
                <div className={'card_item'}>
                  <div className={'card_item-title'}>
                    <div className={'box-img'}>
                      <img src="icons/contribute2earn.svg" alt="" width="37px" height="34px" />
                    </div>
                    <div className={'title'}>
                      Contribute 2 Earn
                    </div>
                  </div>
                  <div className={'card_item-text'}>
                    Join the builders of NEAR Academy on Github. Earn NEAR if your PR is accepted
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className={'second'}>
            <div className={'img img_top-left'}>
              <img src="images/freeCourse/dog.png" alt="" />
            </div>
            <div className={'img  img_bottom-left'}>
              <img src="images/freeCourse/man_left.png" alt="" />
            </div>
            <div className={'img  img_bottom-right'}>
              <img src="images/freeCourse/man_right.png" alt="" />
            </div>
            <div className={'wrapp'} id="freeCourse">
              <h1 className={'second-title'}>Free course</h1>
              <div className={'box-top'}>
                <div className={'box-img'}>
                  <img src="images/freeCourse/logo_large.png" alt="" />
                  <span className={'version'}>v.1</span>
                </div>
                <div className={'text'}>
                  Free Interactive course for Web2 developers to fast entry into the NEAR protocol
                </div>
              </div>
              <div className={'box-bottom'}>
                <div className={'description'}>
                  <p className={'paragraph'}>
                    You are about to play the role of a web developer at the Meme Museum.
                  </p>
                  <p className={'paragraph'}>
                    The year is 2029, the near future. Things are not that different from today except perhaps that life is 80% digital now.
                    Innovations that seemed like breakthroughs in the early 2020s are now widely adopted.
                    NEAR Protocol is the leading blockchain platform.
                  </p>
                  <p className={'paragraph'}>
                    The new NFT Meme Museum in Rio de Janeiro is the hottest thing right now.
                    Elon Musk was there at its inauguration last week and that says something!
                  </p>
                </div>
                <div className={'course-specs'}>
                  <div className={'course-specs_title'}>Course specs:</div>
                  <div className={'course-specs_options'}>
                    <div className={'option_name'}>Difficulty:</div>
                    <div className={'option_value'}>Beginner</div>
                  </div>
                  <div className={'course-specs_options'}>
                    <div className={'option_name'}>Chapters:</div>
                    <div className={'option_value'}>8</div>
                  </div>
                  <div className={'course-specs_options'}>
                    <div className={'option_name'}>Duration:</div>
                    <div className={'option_value'}>45 min</div>
                  </div>
                  <div className={'course-specs_options'}>
                    <div className={'option_name'}>Certificate:</div>
                    <div className={'option_value'}>Yes</div>
                  </div>
                </div>
              </div>
              <div className={'btnContainer'}>
                <div className={'boxArrow'} />
                <Link to="/near101/splash-1">
                  <Button text="Begin course now" color="gradient"/>
                </Link>
              </div>
            </div>
          </section>
          
          <section className={'third'}>
            <div className={'wrapp'}>
              <h1 className={'third-title'}>
                Why learn blockchain & NEAR Protocol?
              </h1>
              <div className={'box-items'}>
                <div className={'item'}>
                  <div className={'item-img_fire'} />
                  <div className={'item-description'}>
                    <div className={'item-title'}>
                      Web is evolving. Don’t oversleep it
                    </div>
                    <div className={'item-text'}>
                      The decentralized internet, or Web3, has been growing at a fast pace since its inception in 2009.
                      It is now a magnet to talent, with more smart developers joining every day.
                      Web3 monthly developers are up +15% over 2020, following investments by venture capital of about $900M USD.
                    </div>
                  </div>
                </div>
                <div className={'item middle'}>
                  <div className={'item-img_compass'} />
                  <div className={'item-description'}>
                    <div className={'item-title'}>
                      Web3 is already here and waiting for you
                    </div>
                    <div className={'item-text'}>
                      This is very similar to the growth of internet services in the early 2000s, and hints at significant development for years to come.
                      Importantly, the infrastructure has matured and makes it easy to create dApps, the decentralized equivalent to Apps.
                    </div>
                  </div>
                </div>
                <div className={'item'}>
                  <div className={'item-img_rocket'} />
                  <div className={'item-description'}>
                    <div className={'item-title'}>
                      Curious minds gets the vast opportunities
                    </div>
                    <div className={'item-text'}>
                      The new skills that you will learn by finishing this course will open new doors and new career opportunities in the ever growing blockchain and smart contract industry!
                    </div>
                  </div>
                </div>
              </div> 
             </div>
          </section>
        </HomeContainer>
      </HomePage>
      <MainFooter />
    </HomeStyled>
  )
}
