import { currentUser, UserButton } from '@clerk/nextjs';
import { redirect } from 'next/navigation'
import header from '@/componants/header';

export default async function auth() {
  const user = await currentUser();
  console.log(user?.firstName + " " + user?.lastName + " Tried to access dashboard, Got : " + user?.publicMetadata.isAllowed);

  if (user?.publicMetadata.isAllowed !== true) {
    console.log(user?.firstName + " " + user?.lastName + " Was Redirected, Got :  " + user?.publicMetadata.isAllowed);
    redirect("/unauth")
  }

  return(
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      

      <h2 className='font-semibold text-3xl mb-4 p' >Hello {user?.firstName}!</h2>
      <h1 className='font-semibold mb-4'>Welcome to the Dashboard</h1>
      
    </main>
    
  )

}