import './ImportantLiknks.scss';
import { addressGroup, importantLinks } from '../../staticData';
import AddressGroup from '../AddressGroup/AddressGroup';
import Link from '../Link/Link';

const ImportantLiknks = () => {
  return (
    <div className='importantLinks'>
        <div className="linksWrapper">
          {
            importantLinks.map((item) => (
              <Link item={item} key={item.id}/>
            ))
          }
          <div className="address">
            {
              addressGroup.map((address) => (
                <AddressGroup address={address} key={address.id}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default ImportantLiknks