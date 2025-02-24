"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

interface Props {
  vin: string
}

export function PurchaseReport({ vin }: Props) {
  const [loading, setLoading] = useState(false)

  const handlePurchase = async () => {
    setLoading(true)
    // Implement Stripe payment here
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle>Full Report Access</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {[
            "Complete accident history",
            "All previous owners",
            "Service records",
            "Mileage verification",
            "Market value estimation",
            "Theft check",
            "PDF report download",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handlePurchase} disabled={loading}>
          {loading ? "Processing..." : "Purchase Report - $39.99"}
        </Button>
      </CardFooter>
    </Card>
  )
}

