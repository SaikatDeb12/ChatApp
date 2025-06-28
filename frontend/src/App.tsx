import "./App.css";

function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <div className="border border-white w-[30vw] h-fit px-8">
        <div className="w-full h-[10vh]">
          <div>
            <h2 className="text-white text-1xl font-semibold">
              Real Time Chat
            </h2>
            <p className="text-stone-300">
              Temporary room that expires after both user exits
            </p>
          </div>
          <div className="text-white">
            <p>Room Code: 662WJS</p>
            <p>Users: 1/2</p>
          </div>
        </div>
        <div className="text-white h-[60vh] w-full border border-white">
          <p>msg...</p>
        </div>
        <div className="flex h-[10vh]">
          <div>Text field</div>
          <button className="border px-4 py-2 bg-white text-black">Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
