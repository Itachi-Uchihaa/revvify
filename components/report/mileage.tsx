import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gauge, CheckCircle } from "lucide-react"

export function MileageHistory() {
  const readings = [
    { date: "07/2021", km: 11 },
    { date: "06/2022", km: 34065 },
    { date: "03/2023", km: 65195 },
    { date: "10/2023", km: 101948 },
  ]

  const maxKm = Math.max(...readings.map((r) => r.km))

  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <Gauge className="h-5 w-5 text-primary" />
          <CardTitle>Compteur kilométrique</CardTitle>
        </div>
        <div className="flex items-center gap-2 text-green-500">
          <CheckCircle className="h-4 w-4" />
          <span className="text-sm font-medium">Tout a l'air bien</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="rounded-lg bg-muted p-4">
            <div className="text-sm text-muted-foreground">Dernier kilométrage</div>
            <div className="mt-1 text-2xl font-bold">{readings[readings.length - 1].km.toLocaleString()} km</div>
          </div>

          <div className="space-y-4">
            {readings.map((reading, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <span className="text-sm font-medium">{reading.date}</span>
                  <span className="text-sm text-muted-foreground">{reading.km.toLocaleString()} km</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${(reading.km / maxKm) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

