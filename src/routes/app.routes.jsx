import {Route, Routes} from 'react-router-dom'

import {Home} from '../Pages/Home'
import { Profile } from '../Pages/Profile'
import {MoviePreview} from '../Pages/MoviePreview'
import {CreateMovie} from '../Pages/CreateMovie'

export function AppRoutes(){
return(
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/createMovie' element={<CreateMovie/>}/>
    <Route path='/moviepreview/:id' element={<MoviePreview/>}/>
  </Routes>
  )
}