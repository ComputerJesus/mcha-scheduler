import { currentUser } from '@clerk/nextjs';
 
export default async function Page() {
  const user = await currentUser();
 
  if (!user) return <div>Not logged in</div>;

  return <div>Hello {JSON.stringify(user?.publicMetadata)}</div>;}