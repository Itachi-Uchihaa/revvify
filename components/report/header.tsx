import { Card, CardContent } from "@/components/ui/card"
import { Database, Globe } from "lucide-react"

interface Props {
  vin: string
  generated: string
  sources: string
  countries: number
}

export function ReportHeader({ vin, generated, sources, countries }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{"Rapport d'Historique du Véhicule"}</h1>
        <div className="mt-2 text-muted-foreground">
          <p>VIN: {vin}</p>
          <p>Généré le {generated}</p>
        </div>
      </div>

      <Card>
        <CardContent className="grid gap-6 p-6 sm:grid-cols-2">
          <div className="flex items-center gap-4">
            <Database className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">{sources}</p>
              <p className="text-sm text-muted-foreground">Sources de données vérifiées</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Globe className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">{countries}</p>
              <p className="text-sm text-muted-foreground">Pays couverts</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

