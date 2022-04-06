import Image from 'next/dist/client/image';
import styles from '../styles/Chance.module.scss';

import comment_icon from '../constant/icon/comments-icon.svg';
import view_icon from '../constant/icon/view-icon.svg';
import chance_1 from '../constant/chance_1.webp';
import chance_2 from '../constant/chance_2.webp';
import chance_3 from '../constant/chance_3.webp';

interface IChanceGroupProps {
  author: String;
  commentNum: Number;
  viewNum: Number;
  title: String;
  discountRate?: Number;
  price: Number;
  price_option: String[];
  type: String[];
  imgSrc: StaticImageData;
}

const ChanceIcons: IChanceGroupProps[] = [
  {
    author: '빙봉들',
    commentNum: 50,
    viewNum: 4556,
    title: '[우주3차🪐]데이트거리 - 호수공원',
    discountRate: 40,
    price: 91200,
    price_option: ['추가할인'],
    type: ['skp'],
    imgSrc: chance_1,
  },
  {
    author: '일 년 열두 달 공작실',
    commentNum: 272,
    viewNum: 10412,
    title: '어느 고요한 별장에서의 하룻밤',
    discountRate: 29,
    price: 43500,
    price_option: [],
    type: ['skp'],
    imgSrc: chance_2,
  },
  {
    author: '이해공간',
    commentNum: 9,
    viewNum: 1755,
    title: '[추가40%]영국/유럽 - 런던 시내 거리와 기차역 전체 세트',
    discountRate: 70,
    price: 135000,
    price_option: ['추가할인'],
    type: ['skp'],
    imgSrc: chance_3,
  },
];
function Chance({}) {
  return (
    <>
      <div className="chance_container">
        <div className={styles.header}>
          <div className={styles.header_title}>⏰지금이 절호의 찬스!!</div>
          <div className={styles.header_showmore}>더보기</div>
        </div>
        <div className={styles.content_box}>
          {ChanceIcons.map((icon) => (
            <div className={styles.content}>
              <div>
                <Image src={icon.imgSrc} width={274} height={180} />
              </div>
              <div className="chance_image_description">
                <div className={styles.image_box1}>
                  <div>{icon.author}</div>
                  <div className={styles.image_message_box}>
                    <div className={styles.image_message}>
                      <Image src={comment_icon} /> {icon.commentNum}
                    </div>
                    <div className={styles.chance_image_view}>
                      <Image src={view_icon} /> {icon.viewNum}
                    </div>
                  </div>
                </div>
                <div className={styles.content_title}>{icon.title}</div>
                <div className={styles.content_price}>
                  <div className={styles.discount_rate}>{icon.discountRate}%</div>
                  <div className={styles.price}>{icon.price}원</div>
                  {icon.price_option.map((option) => (
                    <div className={styles.price_option}>{option}</div>
                  ))}
                </div>
                {icon.type.map((type) => (
                  <div className={styles.content_type}>{type}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Chance;
