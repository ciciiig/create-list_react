export default function ItemListComponent({itemList}) {
    return (
        <ol>
            {itemList.length === 0 && <p>No Items</p>}
            {itemList.map((item) => {
                return <li key={item.id}>{item.value}</li>
            })}
        </ol>
    )
}