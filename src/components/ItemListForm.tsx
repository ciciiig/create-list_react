import { FC, Dispatch, SetStateAction, FormEvent, useRef } from "react";
import { ItemListType } from "../type.ts";

export type ItemListFormProps = {
    textInputValue: string;
    setTextInputValue:  Dispatch<SetStateAction<string>>;
    setItemList:  Dispatch<SetStateAction<ItemListType[]>>
}

// let someVar = {
//     current: 'form start'
// };

export const ItemListForm: FC<ItemListFormProps> = ({ textInputValue, setTextInputValue, setItemList }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const someVar = useRef('form start');
    const handleSubmit = (formEvent: FormEvent) => {
        if (!textInputValue) return;
        someVar.current = 'form end';

        formEvent.preventDefault();

        setItemList(
            (prevTextInputValue) =>
            [
                ...prevTextInputValue,
                { id: crypto.randomUUID(), value: textInputValue }
            ]
        );

        inputRef.current?.select();
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div>
                <label htmlFor='item'>Type it in: </label>
                <input
                    ref={inputRef}
                    value={textInputValue}
                    onChange={(e) => setTextInputValue(e.target.value)}
                    type='text'
                    id='input' autoFocus />
            </div>
            <button className="text-input" type="submit">Add text input value</button>
        </form>
    );
};