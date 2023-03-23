import {Route, Routes} from 'react-router-dom'

import { SingIn } from '../Pages/SingIn'
import { SingUp } from '../Pages/SingUp'

export function AuthRoutes(){
  return(
    <Routes>
      <Route path='/login' element={<SingIn/>} />
      <Route path='/register' element={<SingUp/>} />
    </Routes>
  )
}