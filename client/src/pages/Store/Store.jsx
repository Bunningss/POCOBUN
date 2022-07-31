import Category from '../../components/Category/Category';
import './Store.scss';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import { useRef } from 'react';
import { categories, productsData } from '../../staticData';

const Store = () => {
    const store = useRef();

    const handleClick = () => {
        store.current.scrollIntoView({
            behavior: "smooth",
            duration: 800
        })
    };

  return (
    <div className='store default'>
        <div className="categories">
            <h2 className="header">Categories. <span>Browse through your favourite items.</span></h2>
            <div className="categoryContainer">
                {
                    categories.map((item) => (
                        <Category handleClick={handleClick} item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
        <h2 className="header">the latest. <span>take a look at whats new, right now!</span></h2>
            <Section section={productsData}/>
        <h2 className="header">Store. <span>the best way to buy products you love.</span></h2>
        <div ref={store} className="storeWrapper"> {/* Loads products according to category. If no category, load all products*/}
            {
                productsData.map((item) => (
                    <Card key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Store