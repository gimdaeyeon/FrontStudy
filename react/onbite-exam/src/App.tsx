import './App.css'

function App() {

  return (
    <div>
        <div className="m-4"></div>
    {/*   5. 보더*/}
        <div className="m-5 border-3 border-orange-500 rounded-lg">
            border
        </div>

    {/*    6. 플렉스 컨테이너*/}
        <div className="flex justify-evenl">
            <div className="w-10 border">1</div>
            <div className="w-10 border flex-1">2</div>
            <div className="w-10 border flex-2">3</div>
            <div className="w-10 border">4</div>
        </div>

    </div>
  )
}

export default App
