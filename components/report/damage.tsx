import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle } from "lucide-react"
import Image from "next/image"

export function DamageReport() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <CardTitle>Dommages</CardTitle>
        </div>
        <div className="flex items-center gap-2 text-green-500">
          <CheckCircle className="h-4 w-4" />
          <span className="text-sm font-medium">Aucun dommage trouvé</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-square">
          <Image src="/placeholder.svg?height=400&width=400" alt="Schéma du véhicule" fill className="object-contain" />
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="border-r border-dashed border-muted-foreground/30">
              <div className="p-4 text-sm">Côté gauche</div>
            </div>
            <div>
              <div className="p-4 text-sm text-right">Côté droit</div>
            </div>
          </div>
          <div className="absolute inset-0 grid grid-rows-2">
            <div className="border-b border-dashed border-muted-foreground/30">
              <div className="p-4 text-sm">Avant</div>
            </div>
            <div>
              <div className="p-4 text-sm text-right">Arrière</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

