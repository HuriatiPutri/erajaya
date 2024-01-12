import Image from "next/image";

export default function Table({ colomn, data}){
    console.log('data', data)
    return(
        <table className="table-auto">
            <thead>
                <tr>
                    {colomn.map((item, index) => {
                        return(
                            <th key={index} className="px-4 py-2">{item}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return(
                        <tr key={index}>
                            <td className="border px-4 py-2">
                                <Image src={item.imageUrl} alt="product" width={100} height={100} />
                            </td>
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border px-4 py-2">{item.description}</td>
                            <td className="border px-4 py-2">{item.price}</td>
                            <td className="border px-4 py-2">
                                <input type="number" className="border-2 w-10 h-1" value={item.quantity} />
                            </td>
                            <td className="border px-4 py-2">{item.quantity}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}