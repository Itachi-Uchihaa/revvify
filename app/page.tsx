import { VinSearch } from "@/components/vin-search"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Car, History, AlertTriangle, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="container relative space-y-6 px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-[64rem] space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Découvrez l'historique complet de votre futur véhicule
            </h1>
            <p className="mx-auto max-w-[42rem] text-base leading-normal text-muted-foreground sm:text-lg sm:leading-8">
              Plus de 900 sources de données dans 35 pays pour vous aider à faire le bon choix
            </p>
            <div className="mx-auto max-w-sm px-4 sm:px-0">
              <VinSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-12 sm:px-6 md:py-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Shield,
              title: "Protection",
              description: "Évitez les arnaques et les véhicules problématiques",
            },
            {
              icon: Car,
              title: "Historique",
              description: "Accédez à l'historique complet du véhicule",
            },
            {
              icon: History,
              title: "Kilométrage",
              description: "Vérifiez l'authenticité du kilométrage",
            },
            {
              icon: AlertTriangle,
              title: "Dommages",
              description: "Découvrez les accidents et réparations",
            },
          ].map((feature, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="flex flex-col items-center p-6 text-center sm:items-start sm:text-left">
                <feature.icon className="h-10 w-10 text-primary sm:h-12 sm:w-12" />
                <h3 className="mt-4 font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works Section */}
      <section className="container px-4 py-12 sm:px-6 md:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">Comment ça marche ?</h2>
          <div className="mt-8 grid gap-8 sm:mt-12 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Entrez le VIN",
                description: "Saisissez le numéro d'identification du véhicule (VIN)",
              },
              {
                step: "2",
                title: "Vérification",
                description: "Nous vérifions plus de 900 sources de données",
              },
              {
                step: "3",
                title: "Rapport détaillé",
                description: "Recevez un rapport complet instantanément",
              },
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="mt-4 font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                {index < 2 && (
                  <ArrowRight className="absolute -right-4 top-6 hidden rotate-90 text-muted-foreground sm:block sm:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/40">
        <div className="container px-4 py-12 sm:px-6 md:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Prêt à vérifier un véhicule ?</h2>
            <p className="mt-4 text-muted-foreground">Obtenez un rapport détaillé en quelques secondes</p>
            <Button size="lg" className="mt-6 w-full sm:mt-8 sm:w-auto">
              Vérifier maintenant
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

