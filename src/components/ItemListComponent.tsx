import { FC } from "react";
import { ItemListType } from "../type.ts";

export type ItemListComponentProps = {
    itemList: ItemListType[];
}
export const ItemListComponent: FC<ItemListComponentProps> = ({ itemList }) =>
    (
        <ol>
            {
                itemList.length === 0
                    ? <p>No Items</p>
                    : itemList.map((item) => {
                        return <li key={item.id}>{item.value}</li>
                    })
            }
        </ol>
    );