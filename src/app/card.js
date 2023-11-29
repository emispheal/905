

export default function Card(props) {

    const fkncardcss = {
        maxwidth: '400px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    };

    return (
        <div classNames="card" style={fkncardcss}>
            {props.children}
        </div>
    )

}