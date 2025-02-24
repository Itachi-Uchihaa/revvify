import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

export function OwnershipHistory() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Ownership History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="relative border-l-2 pl-4 pb-6">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="space-y-1">
                <div className="font-medium">Current Owner</div>
                <div className="text-sm text-muted-foreground">Purchased: March 2022</div>
                <div className="text-sm">Location: California, USA</div>
              </div>
            </div>

            <div className="relative border-l-2 pl-4">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-muted bg-background" />
              <div className="space-y-1">
                <div className="font-medium">Previous Owner</div>
                <div className="text-sm text-muted-foreground">March 2019 - February 2022</div>
                <div className="text-sm">Location: California, USA</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

