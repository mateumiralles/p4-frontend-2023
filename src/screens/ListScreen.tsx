import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ListScreen(){
    const [wantedList, setWanted] = useState([]);
   useEffect(() => {
     const fetch = async () => {
       const result = await axios("https://api.fbi.gov/wanted/v1/list");
       setWanted(result.data.items);
     };
     fetch();
   });
   return(
     <>
               <h1>FBI MOST WANTED</h1>
               <ol>
                 {wantedList.map((w) => (
                   <li>
                     <div>
                        <Link state={{item: w}} to={w["uid"]}><h5>{w["title"]}</h5></Link>
                        
                       <img src={w["images"][0]["thumb"]} />
                       <p>{w["description"]}</p>
                     </div>
                   </li>
                 ))}
               </ol>
             </>
   )
 }

 export default ListScreen;