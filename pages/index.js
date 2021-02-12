import Switch from 'react-bootstrap/esm/Switch';
import Landing from '../components/landing/landing';     
import ProtectedRoute from '../components/pathing/protectedRoute'

export default function Home() {
  return (
    <Switch>
      <Route exact path="Login">
        <div id="firebaseui-auth-container">Login</div>
      </Route>

      <ProtectedRoute redirectTo="/Login" path="/Home">
        <div>Home</div>
      </ProtectedRoute>

      <Route exact path="/">
        <div>Root</div>
      </Route>

    </Switch>
  )
}
