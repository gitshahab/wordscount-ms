import { Route, Routes } from 'react-router-dom'
import { Joke, PageNotFound, WordsCounter } from '../pages'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<WordsCounter/>} ></Route>
        <Route path='/joke' element={<Joke/>} ></Route>
        <Route path='/*' element={<PageNotFound/>} ></Route>
    </Routes>
  )
}
