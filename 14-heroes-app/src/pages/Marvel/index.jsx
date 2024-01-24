import { PageTitle } from '@Components/ui'
import { HeroList } from '@Components/heroes'

function MarvelPage() {
  return (
    <>
      <PageTitle title='Marvel Comics' />
      <HeroList publisher="Marvel Comics" />
    </>
  )
}

export { MarvelPage }
