
import Navbar from "./components/navbar"

function App() {

  return (
    <>
    <div>
      {/* Include the Navbar component */}
      <Navbar />
      
      {/* Main content of your app */}
      <main className="p-8">
        <h1 className="text-3xl font-semibold">Welcome to My App!</h1>
        <p className="mt-4">This is a simple app with a navbar using React and Tailwind CSS.</p>
      </main>
    </div>
    </>
  )
}

export default App
