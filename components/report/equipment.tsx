import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, Check } from "lucide-react"

export function Equipment() {
  const categories = [
    {
      name: "Sécurité",
      items: ["Airbags frontaux", "ABS", "Contrôle de stabilité", "Aide au freinage d'urgence"],
    },
    {
      name: "Confort",
      items: ["Climatisation automatique", "Sièges chauffants", "Régulateur de vitesse", "Vitres électriques"],
    },
    {
      name: "Multimédia",
      items: ["Écran tactile", "Navigation GPS", "Bluetooth", "Prises USB"],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          <CardTitle>Équipements</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div key={index} className="space-y-3">
              <h4 className="font-medium">{category.name}</h4>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg border p-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-green-500/20 p-1">
              <Check className="h-4 w-4 text-green-500" />
            </div>
            <span className="font-medium">Norme d'émission : Euro 6</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Ce véhicule respecte les normes d'émissions européennes les plus récentes
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

