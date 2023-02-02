import Image from 'next/image';
import { notFound } from 'next/navigation';
import { others } from '../../../database/others';

export const dynamic = 'force-dynamic';

export default function OtherPage({ params }) {
  const singleOther = others.find((other) => {
    return other.name.toLowerCase().replace(' ', '-') === params.otherName;
  });

  console.log(singleOther);
  if (!singleOther) {
    // throw new Error
    notFound();
  }

  return (
    <>
      <h1>{singleOther.name}</h1>
      <main>
        This is a {singleOther.name} and is used for {singleOther.use}
        <br />
        <Image
          src={`/images/${singleOther.name}-${singleOther.id}.jpg`}
          alt={singleOther.name}
          width="200"
          height="200"
        />
      </main>
    </>
  );
}
