import { ReportBuilder } from "../builders"

const Reports = () => {
  const revenueSection = ReportBuilder.section('Receitas')
    .addText('Receitas do ano de 2024')
    .addTable('Vendas por mês', [
      ['Mês', 'Valor'],
      ['Janeiro', 'R$ 200,00'],
      ['Fevereiro', 'R$ 300,00'],
      ['Março', 'R$ 400,00'],
      ['Abril', 'R$ 500,00'],
      ['Maio', 'R$ 600,00'],
      ['Junho', 'R$ 700,00'],
      ['Julho', 'R$ 800,00'],
      ['Agosto', 'R$ 900,00']
    ])
    .build()

  const expensesSection = ReportBuilder.section('Despesas')
    .addText('Despesas do ano de 2024')
    .addTable('Despesas por categoria', [
      ['Categoria', 'Valor', 'Descrição'],
      ['Marketing', 'R$ 1000,00', 'Marketing de conteúdo'],
      ['Operações', 'R$ 500,00', 'Operações de logística'],
      ['Desenvolvimento', 'R$ 700,00', 'Desenvolvimento de software'],
    ])
    .build()

  const finalReport = ReportBuilder.section('Relatório de Vendas')
    .addSubSection(revenueSection)
    .addSubSection(expensesSection)
    .build()

  return (
    <div>
      {finalReport}
    </div>
  )
}

export {
  Reports
}
