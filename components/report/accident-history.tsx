import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ShieldCheck } from "lucide-react"

export function AccidentHistory() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            Accident History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h4 className="font-medium">Minor Accident</h4>
              <p className="text-sm text-muted-foreground">Reported on: January 15, 2021</p>
              <ul className="mt-2 list-inside list-disc text-sm">
                <li>Front-end collision reported</li>
                <li>Airbags did not deploy</li>
                <li>Vehicle was driveable</li>
              </ul>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span className="font-medium">No other accidents reported</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

