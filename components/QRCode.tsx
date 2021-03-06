import Image from 'next/image'

function QRCode() {
  return (
    <div className="mx-auto mt-10 mb-10 w-auto flex-col items-center rounded-3xl bg-white p-5 shadow-md">
      <div className="relative mx-auto mb-6 h-64 w-64 sm:h-80 sm:w-80">
        <Image
          className="rounded-3xl"
          src="/images/image-qr-code.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="-mx-3 flex w-72 flex-col items-center font-outfit sm:mx-0 sm:w-80 sm:px-2">
        <h1 className="mb-4 text-center text-2xl font-bold text-[#1f3251]">
          Improve your front-end skills by building projects
        </h1>
        <p className="pb-8 text-center text-lg text-[#7b879d]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}

export default QRCode
