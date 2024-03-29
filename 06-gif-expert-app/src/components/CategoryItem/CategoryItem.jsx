import PropTypes from 'prop-types'
import PlaceholderedImage from '../../ui/PlaceholderedImage'

import './CategoryItem.css'

function CategoryItem({ title, image, user }) {
  return (
    <li className="masonry-item">
      <ItemImage title={title} image={image} />
      <ItemDetails title={title} image={image} user={user} />
    </li>
  )
}

function ItemImage({ title, image }) {
  const rndColor = Math.floor(Math.random() * 5) + 2

  return (
    <a
      className="masonry-item__image"
      href={image.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <PlaceholderedImage
        className="masonry-item__image"
        placeholderColor={`var(--primary-${rndColor}00)`}
        src={image.url}
        alt={title}
        height={image.height}
        width={image.width}
      />
    </a>
  )
}

function ItemDetails({ title, image, user }) {
  if (!user) {
    return (
      <div className="masonry-item__details masonry-item__details--no-user">
        <ItemTitle title={title} image={image} />
      </div>
    )
  }

  return (
    <div className="masonry-item__details masonry-item__details--user">
      <ItemAvatar user={user} />
      <div className="masonry-item__user">
        <ItemTitle title={title} image={image} />
        <ItemUsername user={user} />
      </div>
    </div>
  )
}

function ItemTitle({ title, image }) {
  return (
    <a
      className="masonry-item__title"
      href={image.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title || <i>Untitled</i>}
    </a>
  )
}

function ItemAvatar({ user }) {
  return (
    <a
      className="masonry-item__avatar"
      href={user.profile_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <PlaceholderedImage
        placeholderColor={'var(--primary-100)'}
        src={user.avatar_url}
        alt={`${user.username} avatar`}
      />
    </a>
  )
}

function ItemUsername({ user }) {
  return (
    <a
      className="masonry-item__username"
      href={user.profile_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {user.username}
    </a>
  )
}

const imageType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
})

const userType = PropTypes.shape({
  profile_url: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
})

CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: imageType.isRequired,
  user: userType,
}

ItemImage.propTypes = {
  title: PropTypes.string.isRequired,
  image: imageType.isRequired,
}

ItemDetails.propTypes = {
  title: PropTypes.string.isRequired,
  image: imageType.isRequired,
  user: userType,
}

ItemTitle.propTypes = {
  title: PropTypes.string,
  image: imageType.isRequired,
}

ItemAvatar.propTypes = {
  user: userType.isRequired,
}

ItemUsername.propTypes = {
  user: userType.isRequired,
}

export default CategoryItem
