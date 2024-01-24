import { HeroList } from '@Components/heroes'
import { PageTitle } from '@Components/ui'

function DcPage() {
  return (
    <>
      <PageTitle title='DC Comics' />
      <HeroList publisher="DC Comics" />
    </>
  )
}

export { DcPage }
