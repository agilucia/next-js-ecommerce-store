import Image from 'next/image';
import Link from 'next/link';
import { shoes } from '../../database/shoes';

export default function ShoesPage() {
  return (
    <>
      <h1>Climbing Shoes</h1>
      <main>
        {shoes.map((shoe) => {
          return (
            <div key={shoe.id}>
              <Link href={`/shoes/${shoe.name.toLowerCase()}`}>
                <h2>{shoe.name}</h2>
              </Link>
              <Link href={`/shoes/${shoe.name.toLowerCase()}`}>
                <Image
                  src={`/images/${shoe.name}-${shoe.id}.jpg`}
                  alt={shoe.name}
                  width="200"
                  height="200"
                />
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
}
