import { FC, useEffect, useState } from "react";

export const List: FC = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems(5));
        console.log('updating items');
    }, [getItems])

    return items.map(item => <div key={item}>{item}</div>)
}