import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function ReportSummary() {
  const items = [
    { label: "Compteur kilométrique", status: "ok" },
    { label: "Statut légal", status: "ok" },
    { label: "Dommage", status: "ok" },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Card key={index}>
          <CardContent className="flex items-center gap-4 p-6">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <div>
              <div className="font-medium">{item.label}</div>
              <div className="text-sm text-muted-foreground">Tout a l'air bien</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

