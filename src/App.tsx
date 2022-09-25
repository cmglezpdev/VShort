import { VideoPlayer } from "./components/VideoPlayer"


function App() {

  return (
    <div className='bg-black h-screen grid place-content-center'>
        <main className='w-screen max-w-[375px] aspect-[9/16]'>
          <VideoPlayer />
        </main>
    </div>
  )
}

export default App
