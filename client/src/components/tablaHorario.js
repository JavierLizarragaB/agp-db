import React from 'react'
import styled from 'styled-components'
import {useTable} from 'react-table'

//estilo de la tabla, no supe bien como moverlo porque importa de styled-component
const Styles = styled.div`
  padding: 1rem;

  table {
    margin-bottom:2rem;
    border-spacing: 0;

    tr:nth-child(odd) {
      background-color: #f2f2f2;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      :hover {background-color:#ddd;}
    }

    tr:nth-child(even) {
      background-color: #FFFF;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      :hover {background-color:#ddd;}
    }

    th {
      background-color: #F7ADA4;
      color: white;
      
      margin: 0;
      padding: 0.5rem;

      :last-child {
        border-right: 0;
      }
    }

    td {
      margin: 0;
      padding: 0.5rem;
      

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

const jsonpaciente = {"_id":{"$oid":"60cacc5ced0179c75db08186"},
                        "fecha_cita":["01/01/2001","02/03/2001","06/05/2011"],
                        "hora_cita":["03:50","04:10","24:01"],
                        "descripcion_cita": ["Este compa ya está muerto nomas no le han avisado","Dead","Revivió" ] }

//puede usarse para hacer el llamado de backend
const newInput = (cont) => {
  return {
    fecha: jsonpaciente.fecha_cita[cont],
    hora: jsonpaciente.hora_cita[cont],
    desc: jsonpaciente.descripcion_cita[cont],
  }
}
//aqui se llena la tabla, usando la función de arriba
function makeData(...lens) {
  var cont = -1
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      cont++
      return {
        ...newInput(cont),
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
            Header: 'Agenda',
            columns: [
              {
                Header: 'Fecha',
                accessor: 'fecha',
              },
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
    
      const data = React.useMemo(() => makeData(jsonpaciente.fecha_cita.length), [])
    
      return (
        <Styles>
          <Table columns={columns} data={data} />
        </Styles>
      ) 
}

export default TablaHorario