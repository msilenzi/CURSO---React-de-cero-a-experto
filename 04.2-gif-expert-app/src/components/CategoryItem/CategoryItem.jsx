import './CategoryItem.css'

function CategoryItem({ title, url, user }) {
  return (
    <li className="masonry-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="masonry-item__image" src={url} alt={title} />
      </a>

      <div
        className={`masonry-item__details
          ${user != null ? 'masonry-item__details--user' : ''}`}
      >
        {user && (
          <a
            className="masonry-item__avatar"
            href={user.profile_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={user.avatar_url} alt={`${user.username} avatar`} />
          </a>
        )}

        <a
          className="masonry-item__title"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>

        {user && (
          <a
            className="masonry-item__username"
            href={user.profile_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.username}
          </a>
        )}
      </div>
    </li>
  )
}

export default CategoryItem
