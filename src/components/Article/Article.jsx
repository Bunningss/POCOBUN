import "./Article.scss";
import { Link } from "react-router-dom";

const Article = ({ blog }) => {
  return (
    <Link className="article" to="/blog/sdh">
      <article className="articleWrapper">
        <div className="articleImgContainer">
          <img className="articleImg" src={blog.img} alt="" />
        </div>
        <div className="articleInfo">
          <h6 className="subheader underline">{blog.title}</h6>
          <h6 className="subheader">{blog.date}</h6>
        </div>
      </article>
    </Link>
  );
};

export default Article;
