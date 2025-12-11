import {OutlineButton as Btn} from "blackmagicjs/frontend"
import { useNavigate } from "react-router-dom"



export default function Homepage() {
  const nav = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1>Vocab Quiz</h1>
    <div className="d-flex flex-column col-6 gap-5">
      <Btn color="limegreen" text="Glossary" onClick={() => nav("/Glossary")} />
      <Btn color="limegreen" text="Quiz" onClick={() => nav("/Quiz")} />
      <Btn color="limegreen" text="Scoreboard" onClick={() => nav("/Scoreboard")} />
    </div>
    </div>
  );
}



