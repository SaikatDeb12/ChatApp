import { useState } from "react";
import "./App.css";

function App() {
  const [toggleRoom, setToggleRoom] = useState<boolean>(false);
  const createNewRoom = () => {
    setToggleRoom(true);
  };
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <div className="w-[30vw] h-fit border-2 font-mono border-stone-800 rounded-lg px-6 py-4 space-y-4">
        <div className="w-full h-fit">
          <div>
            <h2 className="text-stone-300 text-3xl font-normal">
              Real Time Chat
            </h2>
            <p className="text-stone-300 text-sm font-mono">
              Temporary room that expires after both user exits
            </p>
          </div>
          {toggleRoom && (
            <div className="text-stone-300 border-none bg-stone-800 px-2 py-1 my-2 rounded-lg flex justify-between">
              <p>Room Code: 662WJS</p>
              <p>Users: 1/2</p>
            </div>
          )}
        </div>
        {toggleRoom ? (
          <div className="text-stone-300 h-[50vh] w-full py-2 border-2 p-2 border-stone-800 rounded-lg">
            <p>msg...</p>
          </div>
        ) : (
          <button
            onClick={createNewRoom}
            className="w-full bg-stone-100 border-none rounded-lg py-2 text-blac font-semibold"
          >
            Create New Room
          </button>
        )}
        <div className="flex items-center h-fit w-full space-x-2">
          <input
            className="text-stone-300 w-full border-2 border-stone-800 rounded-lg p-2"
            placeholder={toggleRoom ? "Type a message..." : "Enter Room Code"}
          />
          <button className="rounded-lg px-4 py-2 bg-stone-100 text-black">
            {toggleRoom ? "Send" : "Join"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
