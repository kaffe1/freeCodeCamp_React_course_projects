import Header from './components/Header'
import Entry from './components/Entry'
import data from '/src/data.js'


function App() {

  const entries = data.map(item => {
    return <Entry
      key={item.id}
      img={{ src: item.img.src, alt: item.img.alt }}
      name={item.title}
      time={item.dates}
      description={item.text}
      location={item.country} />
  })
  return (

    <>
      {/* sketches--------------- */}


      {/* travel jounal project--------------- */}
      <Header />
      <main>
        {entries}
      </main>


    </>
  )
}



export default App


