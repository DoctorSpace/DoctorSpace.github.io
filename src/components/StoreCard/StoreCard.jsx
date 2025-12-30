const StoreCard = ({ posts, openView }) => {
  return (
    <div className="StoreCards">
      {posts.map((post) => (
        <div
          className="StoreCards__item"
          key={post?.id}
          onClick={() => openView(post)}
        >
          <img src={post?.image} alt={post?.name} />

          <p>{post?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StoreCard;
