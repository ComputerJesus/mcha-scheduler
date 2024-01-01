import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation'


export default async function auth() {
  const user = await currentUser();
  console.log(user?.firstName + " " + user?.lastName + " Tried to access dashboard, Got : " + user?.publicMetadata.isAllowed);

  if (user?.publicMetadata.isAllowed !== true) {
    console.log(user?.firstName + " " + user?.lastName + " Was Redirected, Got :  " + user?.publicMetadata.isAllowed);
    redirect("/unauth")
  }
}