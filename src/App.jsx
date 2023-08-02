import { useState } from "react";
import "./App.css";
import { peopleData } from "./peopledata";
import { Movie } from "./Movie";
export default function App() {
  return (
    <div className="App">
      {/* <Addbox /> */}
      {peopleData.map((person) => (
        <Movie
          name={person.name}
          poster={person.poster}
          rating={person.rating}
          summary={person.summary} 
        />
      ))}
    </div>
  );
}

// function Addbox(){
//   const INITIAL_COLOR_LIST = ["purple","skyblue","pink","green"];
//   const [colorList , setColorList] = useState(INITIAL_COLOR_LIST);
//   const [bg, setbgcol] = useState("");
//   const styles = {
//     background: bg,
//   };
//   return(
//     <div>
//     <input
//       style={styles}
//       onChange={(event) => setbgcol(event.target.value)}
//       type="text"
//       placeholder="please type a color"
//       value={bg}
//     />
    
  
//   </div>
//   )
// }
