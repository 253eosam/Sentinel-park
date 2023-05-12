import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface IColumn {
  field: string,
  type: 'text' | 'checkbox',
  headerName?: string
}

const ListTable: React.FC<any> = ({ columns, rows }) => {

  const TableHeaderCell = (column: IColumn): any => {
    const types = {
      "text": () => {
        return (<TableCell>{column.headerName ?? columns.field}</TableCell>)
      },
      "checkbox": () => {
        return (<TableCell></TableCell>)
      },
    }

    return types[column.type] ? types[column.type]() : types.text()
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {
              columns.map((col: any) => (
                <TableHeaderCell
                  key={col.field}
                  {...col}
                ></TableHeaderCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListTable
