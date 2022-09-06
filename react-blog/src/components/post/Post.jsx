import './post.css';
import { Link } from 'react-router-dom';

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link className="link" to="/post/123">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        nobis animi dicta temporibus exercitationem consequatur hic consequuntur
        voluptas perspiciatis quibusdam. Laborum consequatur dolorem iste sint
        laudantium perferendis, cumque consequuntur praesentium! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Doloremque nobis animi
        dicta temporibus exercitationem consequatur hic consequuntur voluptas
        perspiciatis quibusdam. Laborum consequatur dolorem iste sint laudantium
        perferendis, cumque consequuntur praesentium! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Doloremque nobis animi dicta temporibus
        exercitationem consequatur hic consequuntur voluptas perspiciatis
        quibusdam. Laborum consequatur dolorem iste sint laudantium perferendis,
        cumque consequuntur praesentium!
      </p>
    </div>
  );
}
