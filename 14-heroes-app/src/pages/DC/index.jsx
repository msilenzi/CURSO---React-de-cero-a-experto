import { PageTitle } from '@Components'
import { HeroList } from '@Components/heroes'

function DcPage() {
  return (
    <>
      <PageTitle title='DC Comics' />
      <HeroList publisher="DC Comics" />
    </>
  )
}

export { DcPage }
