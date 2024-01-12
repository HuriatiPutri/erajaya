import Image from "next/image";

export default function Table({ colomn, data}){
    console.log('data', data)
    return(
        <table className="table-auto">
            <thead>
                <tr>
                    {colomn.map((item, index) => {
                        return(
                            <th key={index} className="px-4 py-2">{item.header}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    console.log('itemw', item)
                    return( <TableRow colomn={colomn} item={item} index={index}/>)
                })}
            </tbody>
        </table>
    );
}


export function TableRow ({colomn, item, index }){
    console.log('coloumn', colomn)
    return(
        <tr>
        {colomn.map((citem) => {
            const { key, value } = citem;
            console.log('item', item[value])
            return(   
                <td> {typeof value === 'function'
              ? value(item, index)
              : item[value] ?? '-'}</td>
            )
        })
    }
    </tr>
    )
}