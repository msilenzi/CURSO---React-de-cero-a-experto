import './CategoryItem.css'

function CategoryItem({ title, image, user }) {
  console.log({ title, image, user })

  return (
    <li className="masonry-item">
      <a
        className="masonry-item__image-container"
        href={image.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="masonry-item__image"
          src={image.url}
          alt={title}
          height={parseInt(image.height, 10)}
          width={parseInt(image.width, 10)}
          style={{visibility: 'hidden'}}
          onLoad={(e) => e.target.style.visibility = 'visible'}
        />
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
            <div className="masonry-item__avatar-container">
              <img src={user.avatar_url} alt={`${user.username} avatar`} />
            </div>
          </a>
        )}

        <a
          className="masonry-item__title"
          href={image.url}
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
