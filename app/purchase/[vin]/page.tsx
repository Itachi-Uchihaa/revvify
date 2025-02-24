import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PurchasePage({ params }: { params: { vin: string } }) {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Rapport trouvé !</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <div className="text-sm font-medium">VIN</div>
              <div className="mt-1 font-mono">{params.vin}</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Données disponibles</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Historique complet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Rapport PDF inclus</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Accéder au rapport complet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Shield className="h-8 w-8 text-primary" />
              <div className="text-2xl font-bold">39,99 €</div>
            </div>

            <div className="space-y-2">
              {[
                "Historique complet des propriétaires",
                "Vérification du kilométrage",
                "Historique des accidents",
                "Statut administratif",
                "Équipements et options",
                "Estimation de la valeur",
                "Rapport PDF téléchargeable",
                "Garantie satisfait ou remboursé",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button className="w-full" asChild>
              <Link href={`/report/${params.vin}`}>Acheter le rapport</Link>
            </Button>
            <p className="text-center text-xs text-muted-foreground">Paiement sécurisé • Accès instantané</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

