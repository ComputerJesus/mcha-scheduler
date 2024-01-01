import { UserButton } from "@clerk/nextjs"

export default function dashboard() {
    return (
      <div className="h-screen">
        <UserButton afterSignOutUrl="/"/>
        <h1>Dashboard</h1>
      </div>
      
    )
  }