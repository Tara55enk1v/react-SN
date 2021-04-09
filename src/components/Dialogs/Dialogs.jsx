import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <div className={s.dialogAva}><img src="https://cdn.kwork.ru/pics/t0/85/109231-1.jpg" />{<DialogItem name={d.name} id={d.id}/>}</div>);
    let messageElements = state.messages.map( m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea
                            value={newMessageBody}
                            placeholder='Enter your message'
                            onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>SenD message</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;