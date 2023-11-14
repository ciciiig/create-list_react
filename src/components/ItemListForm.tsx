export default function ItemListForm({ handleSubmit, textIputValue, setTextIputValue }) {

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div>
                <label htmlFor='item'>Type it in: </label>
                <input
                    value={textIputValue}
                    onChange={(e) => setTextIputValue(e.target.value)}
                    onFocus={(e) => e.target.select()}
                    type='text'
                    id='input' autoFocus />
            </div>
            <button className="text-input" type="submit">Add text input value</button>
        </form>
    )
}