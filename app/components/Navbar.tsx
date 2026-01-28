import { SignedIn, SignedOut, SignIn, SignOutButton, UserAvatar, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

const Navbar = async () => {

  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;

  return (
    <nav className="navbar text-base bg-base-100 shadow-sm ">
      <div className="flex-1 flex justfiy-center items-center space-x-6">
        <Link href={"/"}>
          <img src="/logo.png" alt="Logo" className=" h-16 object-contain" />
        </Link>
        <Link href={"/about-us"} className=" hidden md:inline">About us</Link>

      </div>
      <div className="">
        <SignedIn>
          <div className="flex justify-between items-center gap-6 ">

            <Link href={"/todos"} className="">My Todos</Link>
            {email !== "test@test.com" ?
              <UserButton /> :
              <SignOutButton redirectUrl="/signin" >
                <button className="btn btn-link btn-error">Log out</button>
              </SignOutButton>

            }
          
          </div>
        </SignedIn>
        <SignedOut>
          <div className="space-x-6">

            <Link href={"/signin"}>signin
            </Link>
            <Link href={"/signup"}>signup
            </Link>
          </div>
        </SignedOut>
      </div>


    </nav>
  )
}

export default Navbar