import './cards.css';
import Card from '../card/Card';

const Cards = ({users}) => {

  return <div className='cards'>
     {
        users.map(user => <Card key={user.id} user={user}/>)
     }
  </div>;
};

export default Cards;
