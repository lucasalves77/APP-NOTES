import {Navbar} from './pages/Navbar'
import Title from "./pages/Title"
import {Header} from "./pages/Header"
import {Editor} from "./pages/Editor"
import {MenuNotas} from "./pages/MenuNotas"
import ImageCapa from "./pages/ImageCapa"

export function App() {

  return (
    <div className="flex">
      <div className='grid grid-cols-[238px_350px]'>
        <Navbar/>
        <MenuNotas/>
      </div>
      <div className="bg-neutral-800 grid grid-rows-[50px_1fr] h-screen w-full">     
         <Header/>
        <div id='scrollBarContent' className='flex justify-center overflow-auto h-full'>    
          <div className='w-[90%] grid grid-cols-1 grid-rows-[auto_auto_1fr] '>
            <ImageCapa/>
            <Title/>
            <Editor/>
          </div>         
        </div>
      </div>
    </div>
  )
}

