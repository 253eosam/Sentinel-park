import { Box, Checkbox, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useMemo, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { drawerAtom } from '../drawer/TemporarySwipeableDrawer'

export interface IColumn {
  field: string
  type?: 'string' | 'checkbox' | 'number' | 'link'
  headerName?: string
  style?: IColumnStyle
}

interface IColumnStyle {
  width?: number
  align?: 'center'
  link?: boolean
}

interface IRow {
  id: number
  [key: string]: any
}

interface IProps {
  columns: IColumn[]
  rows: IRow[]
  watchChecked?: (checked: number[]) => void
}

const CHECKBOX_ALL_EVENT_VALUE = -1

const ListTable: React.FC<IProps> = ({ columns, rows, watchChecked }) => {
  const setDrawer = useSetRecoilState(drawerAtom)
  const [checkedArr, setCheckedArr] = useState<number[]>([])
  const isCheckedAll = useMemo(() => checkedArr.length === rows.length, [checkedArr.length, rows.length])
  const notifyCheckedWatcher = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked
    let arr = [...checkedArr]
    if (id === CHECKBOX_ALL_EVENT_VALUE) {
      arr = status ? rows.map(({ id }) => id) : []
    } else if (status) arr.push(id)
    else arr.splice(arr.indexOf(id), 1)
    setCheckedArr(arr)
    !!watchChecked && watchChecked(arr)
  }

  const TableHeaderCell = (column: IColumn): any => (
    <TableCell variant="head" align="center" sx={{ ...column.style }}>
      {column.type === 'checkbox' ? <Checkbox onChange={(event) => notifyCheckedWatcher(CHECKBOX_ALL_EVENT_VALUE, event)} checked={isCheckedAll} /> : column.headerName ?? column.field}
    </TableCell>
  )

  const TableBodyCell = (row: IRow) => {
    const mappingHeaders = columns.map(({ field, type, style }) => ({ val: row[field], field, type, style }))
    const typeCells = {
      string: (val: string) => val,
      number: (val: number) => (+val).toLocaleString('en'),
      link: (val: string) => (
        <Link variant="subtitle1" underline="hover" style={{ cursor: 'pointer' }} onClick={() => setDrawer(true)}>
          {val}
        </Link>
      ),
      checkbox: (val: boolean) => <Checkbox onChange={(event) => notifyCheckedWatcher(row.id, event)} checked={checkedArr.includes(row.id)} />,
    }
    return (
      <TableRow>
        {mappingHeaders.map((item) => (
          <TableCell key={`${row.id}.${item.field}`} align={item.style?.align} sx={item.style}>
            {item.type && typeCells[item.type] ? (typeCells[item.type] as (param: any) => string)(item.val) : typeCells.string(item.val)}
          </TableCell>
        ))}
      </TableRow>
    )
  }

  return (
    <Box sx={{ height: '100%' }}>
      <Paper sx={{ height: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ height: '100%' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((col: any) => (
                  <TableHeaderCell key={col.field} {...col}></TableHeaderCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: any) => (
                <TableBodyCell key={row.id} {...row}></TableBodyCell>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

export default ListTable
