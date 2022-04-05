import Link from 'next/link'
import Image from 'next/image'
import MediumLogo from '../public/images/medium-logo.png'

function Header() {
  return (
    <header className='flex justify-between p-4 max-w-7xl mx-auto'>
      <div className="flex items-center space-x-5 p-2">
        <Link href="/">
          <a>
          <Image
            className="w-44 cursor-pointer object-contain"
            src={MediumLogo}
            alt="medium logo"
          />
          </a>
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white ">
            Follow
          </h3>
        </div>
      </div>
      
      <div className="flex items-center space-x-5 text-green-600 ">
            <h3>Sign in</h3>
            <h3 className="border border-green-600 rounded-full px-4 py-1">Get Started</h3>
        </div>
    </header>
  )
}

export default Header
