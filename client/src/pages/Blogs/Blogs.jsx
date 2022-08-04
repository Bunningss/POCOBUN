import Article from '../../components/Article/Article';
import './Blogs.scss';
import { blogs } from '../../staticData';

const Blogs = () => {
  return (
    <div className='blogs default defaultPadding'>
        <div className="blogsTop">
            <h2 className="header">
                We are happy to share our knowledge with you about all things fashion and body care.
            </h2>
        </div>
        <div className="blogsBottom">
          {
            blogs.map((blog) => (
              <Article blog={blog}/>
            ))
          }
        </div>
    </div>
  )
}

export default Blogs