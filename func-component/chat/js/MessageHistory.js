'use strict';

const MessageHistory = ({list = []}) => {
  if (!list.length) {
    return <ul />;
  }
  return (
    <ul>
      { list.map((m) => {
         switch (m.type) {
           case 'response':
             return ( <Response key = {m.id} from = {m.from} message = {m} /> );
           case 'message': 
             return ( <Message key = {m.id} from = {m.from} message = {m} /> );
           case 'typing': 
             return ( <Typing key = {m.id} from = {m.from} message = {m} /> );
         }
       }
      )}
    </ul> 
  );
}
