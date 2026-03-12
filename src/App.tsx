import { useState } from "react"
import { neetChapters } from "./chapters"

export default function App(){

const [subject,setSubject] = useState("Physics")

return (

<div style={{padding:"30px",fontFamily:"Arial"}}>

<h1>NEET Master 🚀</h1>

<h2>Select Subject</h2>

<button onClick={()=>setSubject("Physics")}>Physics</button>
<button onClick={()=>setSubject("Chemistry")}>Chemistry</button>
<button onClick={()=>setSubject("Biology")}>Biology</button>

<h2>{subject} Chapters</h2>

<ul>

{neetChapters[subject].map((chapter,i)=>(

<li key={i}>{chapter}</li>

))}

</ul>

</div>

)

}
