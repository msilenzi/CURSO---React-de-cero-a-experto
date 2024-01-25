import PropTypes from 'prop-types'
import { useMemo } from 'react'

import { PageTitle } from '@Components/ui'
import { getHeroesByPublisher } from '@Utils'
import { HeroList } from './HeroList'

function PublisherList({ publisher }) {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <>
      <PageTitle title={publisher} />
      <HeroList heroes={heroes} />
    </>
  )
}

PublisherList.propTypes = {
  publisher: PropTypes.string.isRequired,
}

export { PublisherList }
