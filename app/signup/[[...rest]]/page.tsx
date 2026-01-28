import { ClerkLoaded, ClerkLoading, SignUp } from '@clerk/nextjs';
import Link from 'next/link';

const page = () => {
  return (
    <main className="w-full  flex justify-center items-center flex-col gap-6 p-8 ">

      <div className="flex flex-col items-center justify-center min-h-175 w-full ">

        <ClerkLoading>
          <div className="w-100 h-155 bg-base-200 animate-pulse rounded-xl  " />
        </ClerkLoading>

        <ClerkLoaded>
          <div className="space-y-8">

            <SignUp />

            <Link
              href={"/signin"}
              className="btn btn-info text-base cursor-pointer flex justify-between items-center px-4 py-2 border rounded  "
            >
              Login With Test Credentials
            </Link>
          </div>
        </ClerkLoaded>
      </div>


    </main >
  )
}

export default page