'use strict';

const MessageHistory = ({list = []}) => {
  if (!list.length) {
    return <ul />;
  }
  
  const getMessageType = (type) => {
    switch (type) {
      case 'response':
        return Response;
      case 'message': 
        return Message;
      case 'typing': 
        return Typing;
    }  
  }
   
  return (
    <ul>
      { list.map((props) => {
        const MessageType = getMessageType(props.type);
        
        return ( <MessageType key = {props.id} from = {props.from} message = {props} /> );
        }
      )}
    </ul> 
  );
}
