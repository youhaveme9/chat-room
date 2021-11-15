const socket = io()

do{
    usrname = prompt('USERNAME: ')
}while(!usrname)

let message = document.getElementById('message-send');



const appendMessage = (msg, typeMsg) =>{

}

const sendMessage = (mess) =>{
    let msg = {
        username: usrname,
        message1: mess 
    }

    appendMessage(msg, 'outgoing');
}

message.addEventListener('keyup', (event)=>{
    if(event.key === 'Enter'){
        sendMessage(event.target.value);
    }
});

