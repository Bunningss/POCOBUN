import Article from '../../components/Article/Article';
import './Blogs.scss';

const Blogs = () => {
  return (
    <div className='blogs default'>
        <div className="blogsTop">
            <h2 className="header">
                We are happy to share our knowledge with you about all things fashion.
            </h2>
        </div>
        <div className="blogsBottom">
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
        </div>
    </div>
  )
}

export default Blogs