import { BrowserRouter , Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages/Home/Home'
import Tests from './pages/Tests/Tests'
import Study from './pages/Study/Study'
import Competition from './pages/Competition/Competition'
import Header from './components/Header'
import Footer from './components/Footer';

// Tests pages
import AllTests from './pages/Tests/Components/AllTests';
import NationalCertificate from './pages/Tests/Components/NationalCertificate';
import Piima from './pages/Tests/Components/Piima';
import UniversityTest from './pages/Tests/Components/UniversityTest';
import SchoolTest from './pages/Tests/Components/SchoolTest';
function App() {


  return (
    <BrowserRouter>    
    <Header/>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tests" element={<Tests />}>
          <Route index element={<Navigate to="allTests" replace />} />
          <Route path="allTests" element={<AllTests />} />
          <Route path="piima" element={<Piima />} />
          <Route path="universityTest" element={<UniversityTest />} />
          <Route path="nationalCertificate" element={<NationalCertificate />} />
          <Route path="schoolTest" element={<SchoolTest />} />
        </Route>
        
        <Route path="/study" element={<Study />} />
        <Route path="/competition" element={<Competition />} />
      </Routes>

    <Footer/>  
    </BrowserRouter>
  )
}

export default App
