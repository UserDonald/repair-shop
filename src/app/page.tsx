import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            DJ&apos;s Computer
            <br />
            Repair Shop
          </h1>
          <address>
            <p>123 Main St</p>
            <p>Anytown, USA</p>
          </address>
          <p>Open Daily: 9am to 5pm</p>
          <Link href="tel:+1234567890" className="hover:underline">
            +1234567890
          </Link>
        </div>
      </main>
    </div>
  );
}
