const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id:1, name:'Debora'},
        {id:2, name:'Frank'},
        {id:3, name:'Tony'},
        {id:4, name:'Nina'},
        {id:5, name:'Veronika'},
        {id:6, name:'Thatiana'},
    ],
    messages: [
        {id:1, message:'Hi'},
        {id:2, message:'How is your learning?'},
        {id:3, message:'Yo'},
        {id:4, message:'Yo'},
        {id:5, message:'Yo'}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let newMessage = {
                id: 6,
                message: body,
            };
            state.newMessageBody = '';
            state.messages.push(newMessage);
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;