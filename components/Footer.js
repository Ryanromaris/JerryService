import kakao_icon from '../constant/kakao-icon.svg';
import facebook_icon from '../constant/facebook-icon.svg';
import insta_icon from '../constant/insta-icon.svg';
import twitter_icon from '../constant/twitter-icon.svg';
import global_icon from '../constant/global-icon.svg';
import Image from 'next/dist/client/image';

function Footer({}) {
  return (
    <>
      <div className="footer_container">
        <div className="footer_content">
          <ul className="menu_container">
            <li>
              <a>
                <strong>이용약관</strong>
              </a>
            </li>
            <li>
              <a>
                <strong>개인정보처리방침</strong>
              </a>
            </li>
            <li>
              <a>
                <strong>입점문의</strong>
              </a>
            </li>
            <li>
              <a>
                <strong>일반문의/고객센터</strong>
              </a>
            </li>
          </ul>
          <div className="icon_container">
            <a>
              <Image src={kakao_icon} />
            </a>
            <a>
              <Image src={facebook_icon} />
            </a>
            <a>
              <Image src={insta_icon} />
            </a>
            <a>
              <Image src={twitter_icon} />
            </a>
          </div>
          <div className="language_selector">
            <select>
              <option value="ko">한국어</option>
              <option value="en">English</option>
              <option value="zh">中文</option>
              <option value="ja">日本語</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
