import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Car, LogIn } from "lucide-react"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-[8px]">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Car className="h-6 w-6" />
          <span>CarHistory</span>
        </Link>
        <nav className="flex flex-1 items-center justify-end gap-4">
          <ModeToggle />
          <Button variant="outline" size="sm" className="gap-2">
            <LogIn className="h-4 w-4" />
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  )
}

