import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import climber from '../public/images/climber.png';
import styles from './page.module.scss';

export const metadata = {
  description:
    'Shop here for great additions to your bouldering inventory to take your climbing experience from great to awesome',
};

export default function HomePage() {
  return (
    <div className={styles.home_body}>
      {/* <div className={styles.h1_div}> */}
      <h1 className={styles.h1}>BOULDERGEAR FOR EVERYONE</h1>
      {/* </div> */}
      <div className={styles.container}>
        {/* <Link href="/products"> */}
        <div className={styles.products_div}>Products</div>
        <div className={styles.climber_image}>
          <Image src={climber} alt="climber" />
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}
