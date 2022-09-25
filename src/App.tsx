import { FeedVideos } from "./components"

FeedVideos


function App() {

  return (
    <div className='bg-black grid place-content-center'>
        <main className='w-screen snap-y snap-mandatory overflow-y-scroll'>
          <FeedVideos />
        </main>
    </div>
  )
}

export default App
