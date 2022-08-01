import './Article.scss';
import { Link } from 'react-router-dom';
import demo from '../../img/Blogs/blog (2).jpg';

const Article = () => {
  return (
    <Link className='article' to='/article/sdh'>
      <article className="articleWrapper">
          <div className="articleImgContainer">
            <img className='articleImg' src={demo} alt="" />
          </div>
          <div className="articleInfo">
              <h6 className="articleHeader underline">Waarom je een natuurlijkedeodorant moet proberen</h6>
              <h6 className="articleHeader">31/07/2022</h6>
          </div>
      </article>
    </Link>
  )
}

export default Article