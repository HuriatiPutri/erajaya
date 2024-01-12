import PropTypes from 'prop-types'
export default function Table ({ colomn, data, footer }) {
  return (
    <div style={{ overflowX: 'scroll' }}>
      <table style={{ width: '100%' }}>
        <thead>
          <tr className="border border-2">
            {colomn.map((item, index) => {
              return (
                <th key={index} className="px-4 py-2 whitespace-nowrap" style={{ whiteSpace: 'nowrap', padding: '1rem' }}>{item.header}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (<tr><td align="center" colSpan={colomn.length - 1}>No Data Found</td></tr>)}
          {data.map((item, index) => {
            return (<TableRow colomn={colomn} item={item} index={index} key={index}/>)
          })}
        </tbody>
        <tfoot>
          <tr className="border border-2">
            <th>total</th>
            <th colSpan={colomn.length - 2} align="right" >${footer.value}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export function TableRow ({ colomn, item }) {
  return (
    <tr className="border border-2">
      {colomn.map((citem, index) => {
        const { value } = citem
        return (
          <td key={index} style={{ padding: '1 rem' }} align='center'> {typeof value === 'function'
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
