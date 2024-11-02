import { useDispatch, useSelector } from 'react-redux'
import { onCloseDateModal } from 'store'
import { onOpenDateModal } from 'store'

export function useUiStore() {
  const dispatch = useDispatch()
  const { isDateModalOpen } = useSelector((state) => state.ui)

  function openDateModal() {
    dispatch(onOpenDateModal())
  }

  function closeDateModal() {
    dispatch(onCloseDateModal())
  }

  return {
    //* Properties
    isDateModalOpen,

    //* Methods
    openDateModal,
    closeDateModal,
  }
}
