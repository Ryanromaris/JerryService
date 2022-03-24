import kakao_icon from '../constant/kakao-icon.svg';
import facebook_icon from '../constant/facebook-icon.svg';
import insta_icon from '../constant/insta-icon.svg';
import twitter_icon from '../constant/twitter-icon.svg';
import global_icon from '../constant/global-icon.svg';
import footer_logo_icon from '../constant/footer-logo-icon.svg';
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
          <div className="language_icon">
            <Image src={global_icon} />
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
      <div className="footer_container2">
        <div className="footer_content2">
          <Image src={footer_logo_icon} />
          <div>
            <span>주식회사 카펜스트리트대표: 김형준</span> <span>주소: 서울특별시 강남구 테헤란로 518 13층</span>
            <span>통신판매업신고번호: 2021-서울강남-04401</span>
            <span>사업자등록번호: 364-87-01374</span>
            <span>
              <strong>사업자정보확인</strong>
            </span>
            <span>개인정보관리자: 이민홍</span>
            <span>번호: 02-878-1201 </span>
            <span>
              <strong>(발신전용 번호입니다. 문의사항은 고객센터를 활용해주세요. 바로가기)</strong>
            </span>
            <span>1:1 문의하기(cs@acon3d.com)</span>
            <span>호스팅제공: 엔에이치엔고도(주) copyright (c)</span>
            <span>www.acon3d.com all rights reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
