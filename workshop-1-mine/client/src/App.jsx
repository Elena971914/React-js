import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'
import Table from './components/Table'

function App() {
  
  return(
    <div>

    <Header/>

    <main className="main">
    <section className="card users-container">
      <Search />
      <Table />
      </section>
    </main>

    <Footer />

    </div>
  )
}

export default App
