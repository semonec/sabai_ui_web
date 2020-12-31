import * as React from "react";
import "./styles.css";
import { HeaderArea } from "./HeaderArea";
import { HeaderDescription } from "./HeaderDescription";
import { StartButton } from "./StartButton";

export default function App() {
  return (
    <div className="App">
      <div className="bg-placeholder">
        <HeaderArea />
        <HeaderDescription />
      </div>
      <StartButton />
      <div className="terms">
        싸바이 서비스는 운동 정보를 포함한<br></br>
        모든 개인 정보를 동의없이 수집하지 않습니다.
      </div>
      <div className="more">더 알아보기</div>
    </div>
  );
}
