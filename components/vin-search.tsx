"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function VinSearch() {
  const [vin, setVin] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (vin.length === 17) {
      router.push(`/loading/${vin}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
      <Input
        type="text"
        placeholder="Entrez le numéro VIN"
        value={vin}
        onChange={(e) => setVin(e.target.value.toUpperCase())}
        className="flex-1"
        maxLength={17}
        pattern="[A-HJ-NPR-Z0-9]{17}"
        title="Veuillez entrer un VIN valide de 17 caractères"
      />
      <Button type="submit" disabled={vin.length !== 17} className="w-full sm:w-auto">
        <Search className="mr-2 h-4 w-4" />
        Rechercher
      </Button>
    </form>
  )
}

