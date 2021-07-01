import { useContext } from "react";
import MessageContext from "../contexts/MessageContext";
import './Message.css';

function Message() {
    const { message, setMessage } = useContext(MessageContext);

    return (
        message &&
        <div className="alert">
            <span className="closebtn" onClick={() => setMessage("")} >&times;</span>
            {message}
        </div>
    );
}

export default Message;