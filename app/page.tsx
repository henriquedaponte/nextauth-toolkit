import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col 
   items-center justify-center 
   bg-blue-500">
      <div className='space-y-6'>
        <h1 className={cn(
          'text-6xl font-semibold text-white drop-shadow-md text-center',
          font.className,)}>
          🔐 Auth
        </h1>
        <p className='text-white text-large'>
          A simple authentication service
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
