import { Route, Routes, Link } from 'react-router-dom'

export default function NavPhone() {

  return(
    <Routes>
      <Route path="/" element={<Home />}>
        <Link><Home /></Link>
      </Route>
      
    </Routes>
  )
}