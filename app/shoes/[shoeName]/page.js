import Image from 'next/image';
import { notFound } from 'next/navigation';
import { shoes } from '../../../database/shoes';

export const dynamic = 'force-dynamic';

export default function ShoePage({ params }) {
  const singleShoe = shoes.find((shoe) => {
    return shoe.name.toLowerCase() === params.shoeName;
  });

  console.log(singleShoe);
  if (!singleShoe) {
    // throw new Error
    notFound();
  }

  return (
    <>
      <h1>{singleShoe.name}</h1>
      <main>
        This shoe is from the brand {singleShoe.name} and is great for indoor
        climbing
        <br />
        <Image
          src={`/images/${singleShoe.name}-${singleShoe.id}.jpg`}
          alt={singleShoe.name}
          width="200"
          height="200"
        />
      </main>
    </>
  );
}
