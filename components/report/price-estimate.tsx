import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

export function PriceEstimate() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Market Value Estimate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold">$18,500 - $21,000</div>
              <p className="text-sm text-muted-foreground">Estimated market value range</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Factors Affecting Value</h4>
              <ul className="list-inside list-disc text-sm space-y-1">
                <li>One accident reported</li>
                <li>Regular maintenance history</li>
                <li>Two previous owners</li>
                <li>Average mileage for age</li>
                <li>Popular model in good condition</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

