import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car } from "lucide-react"

export function VehicleSpecs() {
  const specs = [
    { label: "Marque", value: "Renault" },
    { label: "Modèle", value: "Arkana Europe / XM3 (XJL)" },
    { label: "Type de carrosserie", value: "Berline" },
    { label: "Année de fabrication", value: "2021" },
    { label: "Moteur", value: "1,6 L" },
    { label: "Puissance", value: "45 kW (60 hp)" },
    { label: "Carburant", value: "Essence" },
    { label: "Portes", value: "4" },
    { label: "Vitesses", value: "4" },
    { label: "Poids total", value: "1 961 kg" },
    { label: "Poids à vide", value: "2 721 kg" },
    { label: "Émissions CO₂", value: "111 g/km" },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Car className="h-5 w-5 text-primary" />
          <CardTitle>Spécifications techniques</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec, index) => (
            <div key={index} className="space-y-1">
              <div className="text-sm text-muted-foreground">{spec.label}</div>
              <div className="font-medium">{spec.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

