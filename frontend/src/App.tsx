import { useEffect, useRef, useState } from "react";
import "./App.css";
import ShortUniqueId from "short-unique-id";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

interface messageType {
  sender: string;
  message: string;
}

function App() {
  const [toggleRoom, setToggleRoom] = useState<boolean>(false);
  const [joinRoom, setJoinRoom] = useState<boolean>(false);
  const [roomCodeGenerated, setRoomCodeGenerated] = useState<string>("");
  const [roomEntered, setRoomEntered] = useState<string>("");
  const [messages, storeMessages] = useState<messageType[]>([]);
  const [input, setInput] = useState<string>("");

  const wsRef = useRef<WebSocket | null>(null);
  const msgEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ws = new WebSocket(import.meta.env.VITE_BASE_URL);
    ws.onmessage = (message) => {
      storeMessages((value) => [
        ...value,
        { sender: "sender2", message: message.data },
      ]);
    };
    wsRef.current = ws;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const createNewRoom = () => {
    setToggleRoom(true);
    const uid = new ShortUniqueId({ length: 5 });
    const code = uid.rnd();
    setRoomCodeGenerated(code.toUpperCase().substring(0, 5));
  };

  const onJoin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setToggleRoom(false);
    setJoinRoom(true);

    setRoomEntered(input);
    wsRef.current?.send(
      JSON.stringify({
        type: "join",
        payload: {
          roomId: input,
        },
      })
    );
    setInput("");
  };

  const onSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    wsRef.current?.send(
      JSON.stringify({
        type: "chat",
        payload: {
          message: input,
        },
      })
    );
    storeMessages((values) => [
      ...values,
      { sender: "sender1", message: input },
    ]);
    setInput("");
  };

  const handleOnChange = (input: React.ChangeEvent<HTMLInputElement>) => {
    setInput(input.target.value);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <div className="sm:w-[50vw] w-[90vw] max-w-120 h-fit border-2 font-mono border-stone-800 rounded-lg px-6 py-4 space-y-4">
        <div className="w-full h-fit">
          <div>
            <div className="text-stone-300 text-2xl flex items-center space-x-2">
              <IoChatbubbleEllipsesOutline />
              <h2 className="text-stone-300 text-3xl font-normal">
                Chat Sphere
              </h2>
            </div>
            <p className="text-stone-400 text-sm font-mono">
              Temporary room for private chatting
            </p>
          </div>
          {joinRoom && (
            <div className="text-stone-300 border-none bg-stone-800 px-2 py-1 my-2 rounded-lg flex justify-between">
              <p>{`Room Code: ${roomEntered}`}</p>
            </div>
          )}
        </div>
        {joinRoom ? (
          <div className="text-stone-300 h-[50vh] w-full py-2 border-2 p-2 border-stone-800 rounded-lg">
            <ol className="max-h-[48vh] w-full flex flex-col space-y-1 overflow-y-auto">
              {messages.map((ele, ind) => (
                <li
                  key={ind}
                  className={`w-full flex my-1
                    ${
                      ele.sender == "sender1" ? "justify-end " : "justify-start"
                    }
                    `}
                >
                  <div className="p-2 mx-2 border bg-stone-100 text-black rounded-lg w-fit">
                    {ele.message}
                  </div>
                </li>
              ))}
              <div ref={msgEndRef} />
            </ol>
          </div>
        ) : (
          <button
            onClick={createNewRoom}
            className="w-full hover:opacity-90 delay-50 bg-stone-100 border-none rounded-lg py-2 text-blac font-semibold"
          >
            Create New Room
          </button>
        )}
        <form
          onSubmit={joinRoom ? onSend : onJoin}
          className="flex items-center h-fit w-full space-x-2"
        >
          <input
            className="text-stone-300 w-full border-2 border-stone-800 rounded-lg p-2"
            placeholder={joinRoom ? "Type a message..." : "Enter Room Code"}
            value={input}
            onChange={handleOnChange}
            autoFocus={true}
          />
          <button className="rounded-lg hover:opacity-90 delay-50 px-4 py-2 bg-stone-100 text-black">
            {joinRoom ? "Send" : "Join"}
          </button>
        </form>
        {toggleRoom && (
          <div className="bg-stone-800 w-full py-2 text-center">
            <p className="text-sm text-stone-400">
              Share this code with your friends
            </p>
            <h2 className="text-2xl bg-stone-800 text-stone-300 font-bold">
              {roomCodeGenerated}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
