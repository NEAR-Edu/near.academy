import React from 'react';
import * as PropTypes from "prop-types";

import {Footer} from './MainFooter.style'
import {Link} from "react-router-dom";
import {PublicUser} from "../../../shared/user/PublicUser";

type FooterViewProps = {
    user?: PublicUser,
    mobileFooter?: boolean | undefined;
    hideCallback: () => void;
}

export const ViewMainFooter  = ({user, mobileFooter, hideCallback}: FooterViewProps) => {
    return (
      <Footer>
        <div className={mobileFooter ? 'mobileFooterWrapp' : 'footer-wrapper'}>
          <div className={'nav-items-mobile'}>
              <ul onClick={mobileFooter? () => hideCallback() : () => ({})}>
                <li className={'nav-item'}><Link to="/terms">Terms</Link></li>
              </ul>
            </div>
          <div className={'left-box'}>
            <div className={'copy-box'}>
                © NEAR Academy – 2021
            </div>
            <div className={'author-box'}>
                Designed by <Link to="/">NEAR Education team</Link>
            </div>
          </div> 
          <div className={'logo-footer'}>
            <div className={'poweredBy'}>Powered by</div> <div className={'logo'} />
          </div> 
          <div className={'social-box'}>
            <div className={'nav-items'}>
              <ul onClick={mobileFooter? () => hideCallback() : () => ({})}>
                <li className={'nav-item'}><Link to="/terms">Terms</Link></li>
              </ul>
            </div>
            <div className={'social-items'}>
              <ul>
                <li className={'nav-item'}>
                  <a href={'https://github.com/NEAR-Edu/near.academy'}>
                    <img src={'/images/main_footer/github.png'} alt="github icon" />
                  </a>
                </li>
                <li className={'nav-item'}>
                  <a href={'https://twitter.com/NEARProtocol'}>
                    <img src={'/images/main_footer/twitter.png'} alt="twitter icon" />
                  </a>
                </li>
                <li className={'nav-item'}>
                  <a href={'https://t.me/cryptonear'}>
                    <img src={'/images/main_footer/telegram.png'} alt="telegram icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </Footer>
  )
}

ViewMainFooter.propTypes = {
  user: PropTypes.object,
}

ViewMainFooter.defaultProps = {}
