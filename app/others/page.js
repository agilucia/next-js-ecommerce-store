import Image from 'next/image';
import Link from 'next/link';
import { others } from '../../database/others';

export default function OthersPage() {
  return (
    <>
      <h1>Other Equipment</h1>
      <main>
        {others.map((other) => {
          return (
            <div key={other.id}>
              <Link
                href={`/others/${other.name.toLowerCase().replace(' ', '-')}`}
              >
                <h2>{other.name}</h2>
              </Link>
              <Link
                href={`/others/${other.name.toLowerCase().replace(' ', '-')}`}
              >
                <Image
                  src={`/images/${other.name}-${other.id}.jpg`}
                  alt={other.name}
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
