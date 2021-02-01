import React,{useEffect,useState,useRef} from "react";

import axios from "axios";

export default function App(){
      const [records,setRecords] = useState([]);
      const [status,setStatus] = useState({});

      const e_id = useRef();
      const e_name = useRef();
      const e_sal = useRef();


      const postData = ()=>{
          axios.post("http://localhost:8080/insert",
                      {"e_id":e_id.current.value,
                       "e_name":e_name.current.value,
                       "e_sal":e_sal.current.value}).then((posRes)=>{
                            setStatus(posRes.data);
                       },(errRes)=>{
                         console.log(errRes);
                       });
      };



      useEffect(()=>{
          axios.get("http://localhost:8080/fetch").then((posRes)=>{
              setRecords(posRes.data);
          },(errRes)=>{
            console.log(errRes);
          });
      },[]);

      return(
         <div>
            <table>
                <tr>
                  <th>SNO</th>
                  <th>E_ID</th>
                  <th>E_NAME</th>
                  <th>E_SAL</th>
                </tr>
                {records.map((obj,index)=>(
                  <tr>
                    <td>{index+1}</td>
                    <td>{obj.e_id}</td>
                    <td>{obj.e_name}</td>
                    <td>{obj.e_sal}</td>
                  </tr>
                ))}
            </table>
          
            <br></br><br></br>
            <input type="number" ref={e_id} />
            <input type="text" ref={e_name} />
            <input type="number" ref={e_sal} />
            <button onClick={postData}>Save</button>
            {JSON.stringify(status)}
          
          </div>
      );


};