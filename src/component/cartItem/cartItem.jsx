import { useEffect } from "react"

export function CartItem({ item, key, onDelete, qty, setQty, onQtyChange }) {
    const total = item.price * item.quantity

    useEffect(() => {
        onQtyChange(item)
    }, [qty])
    return (
        <tr className="border border-slate-300">
            <td><img src={item.imageUrl} alt="product" className="w-28" /></td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><input type="number" className="border-2 w-10 h-1" value={qty} onChange={(e) => setQty(e.target.value)} /></td>
            <td>${total}</td>
            <td><button
                onClick={onDelete}
                className='bg-blue-500 hover:bg-red-700 text-white px-4 py-1 rounded-lg '>
                Hapus
            </button></td>
        </tr>
    )
}