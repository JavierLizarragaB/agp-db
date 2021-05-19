import React from 'react'
import styled from 'styled-components'
import {useTable} from 'react-table'

//estilo de la tabla, no supe bien como moverlo porque importa de styled-component
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`


//Función para crear la tabla (UI)
function Table ({columns, data}){
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })
    return (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      )
}

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}
//puede usarse para hacer el llamado de backend
const newInput = () => {
  return {
    hora:"01:30",
    desc: "Revisión mensual de Panchito Lopez",
  }
}
//aqui se llena la tabla, usando la función de arriba
function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newInput(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }
  return makeDataLevel()
}

//se define la tabla y se llena llamando las funciones anteriores
function TablaHorario() {
    const columns = React.useMemo(
        () => [
          {
            Header: 'Tabla',
            columns: [
              {
                Header: 'Hora',
                accessor: 'hora',
              },
              {
                Header: 'Descripción',
                accessor: 'desc',
              },
            ],
          },
        ],
        []
      )
    
      const data = React.useMemo(() => makeData(3), [])
    
      return (
        <Styles>
          <Table columns={columns} data={data} />
        </Styles>
      ) 
}

export default TablaHorario