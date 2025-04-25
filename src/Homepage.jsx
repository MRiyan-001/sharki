import './index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './hompage-components/Main'
import FooterEnd from './small-components/FooterEnd'


function Homepage() {

  return (
    <div className='w-full'>
     <header>
      <Header />
     </header>

      <main>
        <Main />
      </main>

     <footer>
      <Footer />
      <FooterEnd />
     </footer>
    </div>
  )
}

export default Homepage
