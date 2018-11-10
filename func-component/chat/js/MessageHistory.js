'use strict';

const MessageHistory = ({list}) => {
  if (!list || !list.length) {
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
      {list.map((item) => {
        const MessageType = getMessageType(item.type);
        
        return ( <MessageType key = {item.id} from = {item.from} message = {item} /> );
        }
      )}
    </ul> 
  );
}
