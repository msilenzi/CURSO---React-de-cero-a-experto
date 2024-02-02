import { AuthProvider } from '@Context'
import { AppRouter } from '@Router'

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
