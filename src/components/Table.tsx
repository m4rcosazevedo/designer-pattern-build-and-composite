import styles from '../styles/table.module.css';

interface TableProps {
  title: string
  data: string[][]
}

const Table = ({ data, title }: TableProps) => {
  return (
    <div className={styles.tableContainer}>
      <h3>{title}</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            {data[0].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} data-label={data[0][cellIndex]}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export {
  Table
};

