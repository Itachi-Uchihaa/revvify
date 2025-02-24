import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function VehicleInfo() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Vehicle Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <Image src="/placeholder.svg?height=400&width=600" alt="Vehicle" className="object-cover" fill />
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="font-medium">Make</div>
              <div>Toyota</div>
              <div className="font-medium">Model</div>
              <div>Camry</div>
              <div className="font-medium">Year</div>
              <div>2019</div>
              <div className="font-medium">Body Style</div>
              <div>Sedan</div>
              <div className="font-medium">Engine</div>
              <div>2.5L 4-cylinder</div>
              <div className="font-medium">Transmission</div>
              <div>Automatic</div>
              <div className="font-medium">Exterior Color</div>
              <div>Silver</div>
              <div className="font-medium">Interior Color</div>
              <div>Black</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

