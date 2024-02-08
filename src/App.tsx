import {Navbar} from './pages/Navbar'
import Title from "./pages/Title"
import {Header} from "./pages/Header"
import {Editor} from "./pages/Editor"
import {MenuNotas} from "./pages/MenuNotas"

export function App() {

  return (
    <div className="flex">
      <div className='grid grid-cols-[238px_350px]'>
        <Navbar/>
        <MenuNotas/>
      </div>
      <div className="bg-neutral-800 w-full">
        <div>
         <Header/>
        </div>
        <div className=' grid mx-auto w-[75%]'>
          <Title/>
          <Editor/>
        </div>
      </div>
    </div>
  )
}

