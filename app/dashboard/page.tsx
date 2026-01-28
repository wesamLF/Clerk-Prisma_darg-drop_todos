

import { SignOutButton, UserAvatar, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import React from 'react'

const page = async () => {
  const { userId } = await auth();
  if (!userId) return <p>You must log in</p>;

  return (
    <div className=''>
      <button className="btn btn-primary">Primary</button>
    </div>
  )
}

export default page