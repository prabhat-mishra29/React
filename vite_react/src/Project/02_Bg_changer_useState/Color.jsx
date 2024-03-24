import { useState } from "react";
import Button from "./Button";
function Color() {

    const [color,setColor]=useState("black");

    return ( 
        <div className="w-full h-screen duration-200"
        style={{backgroundColor:color}} >
            {/* style={{backgroundColor:color}} -> "In this way we can implement state" */}

            {/* bottom bar */}
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

                    {/* 
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"indigo"}} onClick={()=>setColor("indigo")}>Indigo</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"violet"}} onClick={()=>setColor("violet")}>Violet</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
                    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>Olive</button> 
                    */}

                    <Button c_color="red" onColorChange={(color)=>setColor(color)}/>
                    <Button c_color="indigo" onColorChange={(color)=>setColor(color)}/>
                    <Button c_color="orange" onColorChange={(color)=>setColor(color)}/>
                    <Button c_color="violet" onColorChange={(color)=>setColor(color)}/>
                    <Button c_color="pink" onColorChange={(color)=>setColor(color)}/>
                    <Button c_color="green" onColorChange={(color)=>setColor(color)}/>
                    <Button c_color="yellow" onColorChange={(color)=>setColor(color)}/>
                    <Button c_color="blue" onColorChange={(color)=>setColor(color)}/>
                    <Button c_color="black" onColorChange={(color)=>setColor(color)}/>
                    <Button c_color="olive" onColorChange={(color)=>setColor(color)}/>
                </div>
            </div>
        </div>
     );
}

export default Color;