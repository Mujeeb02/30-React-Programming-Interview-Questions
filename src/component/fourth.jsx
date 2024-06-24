//build a list component to display a list of items...
const Fourth = () => {
    const items = ['item1', 'items2', 'item3'];
    return (
        <div>
            {items.map((item) => {
                return (
                    <li>{item}</li>
                )
            })}
        </div>
    )
}

export default Fourth
