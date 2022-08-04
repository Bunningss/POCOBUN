import Category from '../../components/Category/Category';
import './Store.scss';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import { useRef, useEffect } from 'react';
import { categories, productsData, sectionData } from '../../staticData';
import { useLocation } from 'react-router-dom';

const Store = () => {
    const cat = useLocation().search
    const store = useRef();

    useEffect(() => {
        if (cat) {
            store.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [cat]);


  return (
    <div className='store default'>
        <div className="categories">
            <h2 className="header">Categories. <span>Browse through your favourite items.</span></h2>
            <div className="categoryContainer">
                {
                    categories.map((item) => (
                        <Category item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
        <h2 className="header">the latest. <span>take a look at whats new, right now!</span></h2>
            <Section section={sectionData}/>
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