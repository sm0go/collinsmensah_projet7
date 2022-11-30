import { Navigate, Outlet} from 'react-router'

const useAuth = () => {
  const user = { loggedIn: true }
  return user && user.loggedIn
}

const ProtectedRoutes = () => {
  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to='/login' />  
}

// const test = ({ login }) => {
//   return(
//     <div>
//       <h1>This is {login.value}</h1>
//     </div>
//   )
// }
 
export default ProtectedRoutes