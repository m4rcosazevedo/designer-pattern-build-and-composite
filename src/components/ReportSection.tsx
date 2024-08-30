import { ReactNode } from "react"

interface ReportSectionProps {
  title: string
  children?: ReactNode
}

const ReportSection = ({ title, children }: ReportSectionProps) => {
  return (
    <section>
      <h1>{title}</h1>

      {children}
    </section>
  )
}

export {
  ReportSection
}
