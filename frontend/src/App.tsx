import "./App.css";

function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <div className="w-fit h-fit border border-stone-600 rounded-lg px-8 py-4 space-y-2">
        <div className="w-full h-fit">
          <div>
            <h2 className="text-white text-2xl font-semibold">
              Real Time Chat
            </h2>
            <p className="text-stone-300">
              Temporary room that expires after both user exits
            </p>
          </div>
          <div className="text-black border bg-stone-500 p-2 rounded-lg flex justify-between">
            <p>Room Code: 662WJS</p>
            <p>Users: 1/2</p>
          </div>
        </div>
        <div className="text-white h-80 w-full py-2 border p-2 border-stone-600 rounded-lg">
          <p>msg...</p>
        </div>
        <div className="flex items-center h-fit w-full space-x-2">
          <div className="text-white w-full border border-stone-600 rounded-lg p-2">
            Text field
          </div>
          <button className="rounded-lg px-4 py-2 bg-white text-black">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
