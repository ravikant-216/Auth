import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'

export const ProtectedRoutes = ({children}) => {
  const jwt_token = Cookies.get('jwt_token')
  if (jwt_token !== undefined) {
    return <> {children}</>
  } else {
    return <Navigate to="/login" />
  }
}
