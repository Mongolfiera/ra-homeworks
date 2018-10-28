'use strict';

const MessageHistory = ({list = []}) => {
  if (!list.length) {
    return <ul />;
  }
   
  return (
    <ul>
      { list.map((props) => {
        let MessageType;
         switch (props.type) {
           case 'response':
             MessageType = Response;
             break;
           case 'message': 
             MessageType = Message;
             break;
           case 'typing': 
             MessageType = Typing;
             break;
         }
        
        return ( <MessageType key = {props.id} from = {props.from} message = {props} /> );
        }
      )}
    </ul> 
  );
}
