import { onCloseDateModal, onOpenDateModal } from '@Store'
import { useDispatch, useSelector } from 'react-redux'

export default function useUiStore() {
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
