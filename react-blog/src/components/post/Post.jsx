import './post.css';

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_960_720.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
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
