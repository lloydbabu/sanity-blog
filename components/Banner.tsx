import Image from 'next/image'
import mLogo from '../public/images/m-logo.png'

function Banner() {
  return (
    <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-5'>
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write, read and connect.
        </h1>
        <h2>
          Easily and freely post your content and connect with millions of
          users.
        </h2>
      </div>
      <div className="hidden md:inline-flex md:scale-50 lg:scale-100 m-10">
        <Image src={mLogo} />
      </div>
    </div>
  )
}

export default Banner
