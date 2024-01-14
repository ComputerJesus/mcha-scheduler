import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
export default async function Home() {


  return (
    <main>
    <header className="p-10 flex justify-between " >
      <h1 className="text-2xl float-left">Mcha Scheduler</h1>
      <span className=" flex float-right">
      <Link href="/dashboard" className="p-2">
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Dashboard</button>
          </Link>
      <SignedIn>
        {/* Mount the UserButton component */}
        
        <UserButton />
        
      </SignedIn>
      </span>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton afterSignInUrl="/dashboard">
          <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</button>
        </SignInButton>
      </SignedOut>
    </header>

    <body>
    
    </body>
    </main>
  )
}