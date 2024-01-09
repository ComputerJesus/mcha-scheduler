import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
export default async function Home() {


  return (
    <main>
    <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
      <h1 className="text-3xl">Mcha Scheduler</h1>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
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