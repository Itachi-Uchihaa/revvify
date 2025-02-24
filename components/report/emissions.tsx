import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf } from "lucide-react"

export function EmissionsInfo() {
  const co2Value = 111
  const maxCo2 = 225
  const percentage = (co2Value / maxCo2) * 100

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-primary" />
          <CardTitle>Émissions de CO₂</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold">{co2Value} g/km</div>
            <div className="text-sm text-muted-foreground">Classe A</div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>0</span>
              <span>{maxCo2}+ g/km</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-full rounded-full bg-green-500" style={{ width: `${percentage}%` }} />
            </div>
            <div className="grid grid-cols-7 text-xs">
              <div>A</div>
              <div>B</div>
              <div>C</div>
              <div>D</div>
              <div>E</div>
              <div>F</div>
              <div>G</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

