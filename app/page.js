import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import climber from '../public/images/climber.png';
import styles from './page.module.scss';

export const metadata = {
  description: 'This is my Home Page',
};

export default function HomePage() {
  return (
    <div className={styles.home_body}>
      <div className={styles.h1_div}>
        <h1 className={styles.h1}>BOULDERGEAR FOR EVERYONE</h1>
      </div>
      <div>
        <Link href="/products">
          <div className={styles.products_div}>Products</div>
          <Image src={climber} alt="climber" className={styles.climber_image} />
        </Link>
      </div>
    </div>
  );
}
