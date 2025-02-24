import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { History } from "lucide-react"

export function Timeline() {
  const events = [
    {
      date: "07/2021",
      location: "Pays inconnu",
      title: "Fabrication",
      description:
        "Le pays indique soit le lieu de fabrication, l'usine d'assemblage ou l'adresse d'enregistrement du fabricant.",
    },
    {
      date: "09/2021",
      location: "France",
      title: "A été immatriculé",
      description: "Évènement administratif (changement de propriétaire, documents, etc.)",
    },
    {
      date: "11/2021",
      location: "France",
      title: "A été immatriculé",
      description: "Évènement administratif (changement de propriétaire, documents, etc.)",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-primary" />
          <CardTitle>Chronologie</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-4">
          {events.map((event, index) => (
            <div key={index} className="relative pl-6">
              <div className="absolute left-0 top-[6px] h-3 w-3 rounded-full border-2 border-primary bg-background" />
              {index !== events.length - 1 && (
                <div className="absolute left-[5px] top-[18px] h-full w-[2px] bg-border" />
              )}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="font-medium">{event.date}</div>
                  <div className="text-sm text-muted-foreground">• {event.location}</div>
                </div>
                <div className="font-medium">{event.title}</div>
                <div className="text-sm text-muted-foreground">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

