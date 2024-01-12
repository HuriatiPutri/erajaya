import PropTypes from 'prop-types'
export default function Table ({ colomn, data, footer }) {
  console.log('data', data)
  return (
    <table className="table-auto border-2">
      <thead>
        <tr className="border border-2">
          {colomn.map((item, index) => {
            return (
              <th key={index} className="px-4 py-2">{item.header}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 && <tr className="border border-2"><td colSpan={colomn.length} className="text-center">No data found</td></tr>}
        {data.map((item, index) => {
          console.log('itemw', item)
          return (<TableRow colomn={colomn} item={item} index={index} key={index}/>)
        })}
      </tbody>
      <tfoot>
        <tr className="border border-2">
          <th>total</th>
          <th colSpan={colomn.length - 2} align="right">${footer.value}</th>
        </tr>
      </tfoot>
    </table>
  )
}

export function TableRow ({ colomn, item, index }) {
  console.log('coloumn', colomn)
  return (
    <tr className="border border-2">
      {colomn.map((citem) => {
        const { value } = citem
        console.log('item', item[value])
        return (
          <td key={index}> {typeof value === 'function'
            ? value(item, index)
            : item[value] ?? '-'}</td>
        )
      })
      }
    </tr>
  )
}

Table.defaultProps = {
  colomn: [],
  data: [],
  footer: {}
}
Table.propTypes = {
  colomn: PropTypes.array,
  data: PropTypes.array,
  footer: PropTypes.object
}

TableRow.defaultProps = {
  colomn: [],
  item: {},
  index: 0
}
TableRow.propTypes = {
  colomn: PropTypes.array,
  item: PropTypes.object,
  index: PropTypes.number
}
