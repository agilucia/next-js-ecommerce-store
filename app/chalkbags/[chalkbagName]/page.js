import Image from 'next/image';
import { notFound } from 'next/navigation';
import { chalkbags } from '../../../database/chalkbags';

export const dynamic = 'force-dynamic';

export default function ChalkbagPage({ params }) {
  const singleChalkbag = chalkbags.find((chalkbag) => {
    return (
      chalkbag.name.toLowerCase().replace(' ', '-') === params.chalkbagName
    );
  });

  console.log(singleChalkbag);
  if (!singleChalkbag) {
    // throw new Error
    notFound();
  }

  return (
    <>
      <h1>{singleChalkbag.name}</h1>
      <main>
        This chalkbag is from the brand {singleChalkbag.name} and it's a size{' '}
        {singleChalkbag.size}
        <br />
        <Image
          src={`/images/${singleChalkbag.name}-${singleChalkbag.id}.jpg`}
          alt={singleChalkbag.name}
          width="200"
          height="200"
        />
      </main>
    </>
  );
}
