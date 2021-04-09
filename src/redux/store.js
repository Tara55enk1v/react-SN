import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message:'Hi, how are you?', likesCount: 12},
                {id:2, message:'It\'s my first post', likesCount: 11},
            ],
            newPostText: 'kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {console.log('state was changed')},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // sendMessage(dialogMessage) {
    //     let newMessage = {
    //         id: 6,
    //         message: dialogMessage,
    //     }
    //     this._state.dialogsPage.messages.push(newMessage);
    // },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;