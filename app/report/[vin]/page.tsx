import { ReportHeader } from "@/components/report/header"
import { ReportSummary } from "@/components/report/summary"
import { MileageHistory } from "@/components/report/mileage"
import { VehicleSpecs } from "@/components/report/specs"
import { DamageReport } from "@/components/report/damage"
import { Timeline } from "@/components/report/timeline"
import { EmissionsInfo } from "@/components/report/emissions"

interface Props {
  params: {
    vin: string
  }
}

export default function ReportPage({ params }: Props) {
  return (
    <div className="container py-8 space-y-8 p-[14px]">
      <ReportHeader vin={params.vin} generated="22/02/2025 19:30" sources="900+" countries={35} />

      <ReportSummary />

      <div className="grid gap-8 md:grid-cols-2">
        <MileageHistory />
        <DamageReport />
      </div>

      <VehicleSpecs />

      <div className="grid gap-8 md:grid-cols-2">
        <EmissionsInfo />
        <Timeline />
      </div>
    </div>
  )
}

