import { useState } from "react";
import "./styles.css";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  //default 每個文件只有一個默認導出 let則沒有這個問題 但let要命名 default不用//
  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (   //匿名的fuction用 =>表示代替 例如： export default() => {} //
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
// .findIndex 為在陣列裡找指定東西的位置 
//例如[a, b, c] 找a的位置 
//const index = hobbies.findIndex((item)=>item===a);
//console.log(idex);
//輸出為 0

//.map 為把陣列裡所有的值列出來 
//例如[a,b,c]
//const editedHobbies = hobbies.map((item)=>item + "!"); 
//console.log(editedHobbies);
//輸出為 0：a  1：b  2：c

//const editedHobbies = hobbies.map((item) =>({text:item}));
//console.log(editedHobbies);
//輸出為 
//0:object
//text="a"

//...從陣列中提取元素
