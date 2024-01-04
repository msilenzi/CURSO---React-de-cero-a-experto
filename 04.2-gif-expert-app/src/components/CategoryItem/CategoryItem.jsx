import './CategoryItem.css'

const CategoryItem = ({ title, url, user }) => {
  return (
    <li className="masonry-item">
      <img className="masonry-item__image" src={url} alt={title} />
      <div
        className={`masonry-item__details ${
          user != null ? 'masonry-item__details--user' : ''
        }`}
      >
        {user && (
          <img
            className="masonry-item__avatar"
            src={user.avatar_url}
            alt={`${user.username} avatar`}
          />
        )}
        <p className="masonry-item__title">{title}</p>
        {user && <p className="masonry-item__username">{user.username}</p>}
      </div>
    </li>
  )
}

export default CategoryItem
