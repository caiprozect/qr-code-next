import Image from 'next/image'

function QRCode() {
  return (
    <div className="mx-auto flex-col items-center rounded-3xl bg-white p-5 shadow-md">
      <div className="relative mx-auto mb-6 h-80 w-80">
        <Image
          className="rounded-3xl"
          src="/images/image-qr-code.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex w-80 flex-col font-outfit">
        <h1 className="mb-3 p-2 text-center text-2xl font-bold text-[#1f3251]">
          Improve your front-end skills by building projects
        </h1>
        <p className="px-2 pb-8 text-center text-lg text-[#7b879d]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}

export default QRCode
