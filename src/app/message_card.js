
import Card from "./card";
// import Time from 'react-time';

export default function MessageCard(props) {
    return (
        <Card>
            <h1>Time Sent {new Date().toUTCString()}</h1>
            {props.message}
        </Card>
    )
}