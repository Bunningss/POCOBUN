import './Blogs.scss';
import { blogs } from '../../staticData';
import Article from '../../components/Article/Article';
import HeaderGroup from "../../components/HeaderGroup/HeaderGroup";
import { scrollToTop } from '../../staticData';

const Blogs = () => {
  scrollToTop()
  return (
    <div className='blogs default defaultPadding'>
        <div className="blogsTop">
          <HeaderGroup header={"We are happy to share our knowledge with you about all things fashion and body care."}/>
        </div>
        <div className="blogsBottom">
          {
            blogs.map((blog) => (
              <Article blog={blog} key={blog.id}/>
            ))
          }
        </div>
    </div>
  )
}

export default Blogs