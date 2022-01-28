import Head from 'next/head'
import QRCode from '../components/QRCode'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex h-screen w-screen items-center bg-[#d6e2f0]">
        <QRCode />
      </main>
    </div>
  )
}
