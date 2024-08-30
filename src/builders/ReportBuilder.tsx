import { ReactNode } from "react";
import { ReportSection, Table } from '../components';

class ReportBuilder {
  private components: ReactNode[] = []

  static section (title: string): ReportBuilder {
    const builder = new ReportBuilder()
    builder.components.push(<ReportSection title={title} />)
    return builder
  }

  addText (text: string): ReportBuilder {
    this.components.push(text)
    return this
  }

  addTable (title: string, data: string[][]): ReportBuilder {
    this.components.push(<Table  title={title} data={data} />)
    return this
  }

  addSubSection (subSection: ReactNode): ReportBuilder {
    this.components.push(subSection)
    return this
  }

  build (): ReactNode {
    return this.components.map((component, index) => (
      <div key={index}>{component}</div>
    ))
  };
}

export {
  ReportBuilder
};
