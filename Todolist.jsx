import React,{useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
const Todolist = (props) => {
    const[line,setLine]=useState(false)
    const cutIt=()=>{
        setLine(true);
    }
  return (
    <>
      <div className="todostyle">
        <span>
          <DeleteIcon  onClick={cutIt} className="btn1"/>
        </span><li style={{textDecoration :line ?"line-through": "none"}}>{props.text}</li>
      </div>
    </>
  );
};
export default Todolist;
