import Image from 'next/dist/client/image';
import styles from '../styles/Chance.module.scss';
import chance_1 from '../constant/chance_1.webp';
import chance_2 from '../constant/chance_2_webp';
import chance_3 from '../constant/chance_3_webp';

function Chance({}) {
  return (
    <>
      <div className={styles.chance_container}>
        <div className={styles.chance_header}>
          <div className={styles.chance_header_title}>⏰지금이 절호의 찬스!!</div>
          <div className={styles.chance_header_showmore}>더보기</div>
        </div>
        <div className={styles.chance_content_box}>
          <div className={styles.chance_content}>
            <div>
              <Image src={chance_1} width={274} height={180} />
            </div>
            <div className={styles.chance_image_description}>
              <div className={styles.chance_image_box1}>
                <div className={styles.chance_image_author}>빙봉들</div>
                <div className={styles.chance_image_message_box}>
                  <div className={styles.chance_image_message}>50</div>
                  <div className={styles.chance_image_view}>4558</div>
                </div>
              </div>
              <div className={styles.chance_content_title}>[우주3차🪐]데이트거리 - 호수공원</div>
              <div className={styles.chance_content_price}>40% 91,200 원 • 추가할인</div>
              <div className={styles.chance_content_type}>skp</div>
            </div>
          </div>
          <div className={styles.chance_content}>
            <div>
              <Image src={chance_1} width={274} height={180} />
            </div>
            <div className={styles.chance_image_description}>
              <div className={styles.chance_image_box1}>
                <div className={styles.chance_image_author}>빙봉들</div>
                <div className={styles.chance_image_message}>50</div>
                <div className={styles.chance_image_view}>4558</div>
              </div>
              <div className={styles.chance_content_title}>[우주3차🪐]데이트거리 - 호수공원</div>
              <div className={styles.chance_content_price}>40% 91,200 원 • 추가할인</div>
              <div className={styles.chance_content_type}>skp</div>
            </div>
          </div>
          <div className={styles.chance_content}>
            <div>
              <Image src={chance_1} width={274} height={180} />
            </div>
            <div className={styles.chance_image_description}>
              <div className={styles.chance_image_box1}>
                <div className={styles.chance_image_author}>빙봉들</div>
                <div className={styles.chance_image_message}>50</div>
                <div className={styles.chance_image_view}>4558</div>
              </div>
              <div className={styles.chance_content_title}>[우주3차🪐]데이트거리 - 호수공원</div>
              <div className={styles.chance_content_price}>40% 91,200 원 • 추가할인</div>
              <div className={styles.chance_content_type}>skp</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chance;
