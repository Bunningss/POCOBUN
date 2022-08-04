import './Link.scss';
import ListItem from '../ListItem/ListItem';

const Link = ({ item }) => {
  const onclick = () => {
    window.scrollTo({
      top: 0
    })
  }
  return (
    <div className='link'>
        <h5 className="title">{item.title}</h5>
        <ul className="list">
            {
                item.links.map((item) => (
                    <ListItem item={item} key={item.id} handleClick={onclick}/>
                ))
            }
        </ul>
    </div>
  )
}

export default Link