"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Search, CheckCircle } from "lucide-react"

export default function LoadingPage({ params }: { params: { vin: string } }) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const steps = [
    "Recherche du véhicule...",
    "Vérification des bases de données...",
    "Analyse de l'historique...",
    "Génération du rapport...",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 2
        if (newProgress === 100) {
          clearInterval(timer)
          setTimeout(() => {
            router.push(`/purchase/${params.vin}`)
          }, 500)
        }
        return Math.min(newProgress, 100)
      })
    }, 100)

    return () => clearInterval(timer)
  }, [router, params.vin])

  useEffect(() => {
    setCurrentStep(Math.floor((progress / 100) * steps.length))
  }, [progress])

  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <Card className="mx-auto max-w-md p-8">
        <div className="text-center">
          <Search className="mx-auto h-12 w-12 animate-pulse text-primary" />
          <h2 className="mt-4 text-xl font-bold">Recherche en cours</h2>
          <p className="mt-2 text-sm text-muted-foreground">VIN: {params.vin}</p>
        </div>

        <Progress value={progress} className="mt-8" />

        <div className="mt-8 space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-3 text-sm">
              <CheckCircle
                className={`h-5 w-5 ${index <= currentStep ? "text-primary" : "text-muted-foreground/30"}`}
              />
              <span className={index <= currentStep ? "text-foreground" : "text-muted-foreground"}>{step}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

