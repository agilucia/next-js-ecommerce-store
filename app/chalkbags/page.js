import Image from 'next/image';
import Link from 'next/link';
import { chalkbags } from '../../database/chalkbags';

export default function ChalkbagsPage() {
  return (
    <>
      <h1>Chalkbags</h1>
      <main>
        {chalkbags.map((chalkbag) => {
          return (
            <div key={chalkbag.id}>
              <Link
                href={`/chalkbags/${chalkbag.name
                  .toLowerCase()
                  .replace(' ', '-')}`}
              >
                <h2>{chalkbag.name}</h2>
              </Link>
              <Link
                href={`/chalkbags/${chalkbag.name
                  .toLowerCase()
                  .replace(' ', '-')}`}
              >
                <Image
                  src={`/images/${chalkbag.name}-${chalkbag.id}.jpg`}
                  alt={chalkbag.name}
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
