import Head from 'next/head'
import QRCode from '../components/QRCode'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
        </style>
      </Head>

      <main className="flex h-screen w-screen items-center bg-[#d6e2f0]">
        <QRCode />
      </main>
    </div>
  )
}
