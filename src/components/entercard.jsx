import { async } from "@firebase/util";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

function Classadd() {
  const [isOpen, setIsOpen] = useState(false);
  const [className, setClassName] = useState("");
  const [teachername, setTeacherName] = useState("");
  const [sectionName, setSectionName] = useState("");
  const [classTimming, setClassTimming] = useState("");
  const [sadulle, setSadulle] = useState("");
  const [batchName, setBatchName] = useState("");

   const handleSubmit = async (e) => {
     e.preventDefault();
     console.log(classTimming, "raza")

     try {
       const docRef = await addDoc(collection(db, "classes"), {
         classTimming: classTimming,
         teacherName: teachername,
       batchNumber: batchName,
        sectionNumber: sectionName,
         sadulle: sadulle,
         className: className,
       });
       console.log("Document written with ID: ", docRef.id);

    } catch (e) {
      console.error("Error adding document: ", e);
    }
   };
  console.log(db, "yyyyy")

//   const handleSubmit = (e) => {
    
//     e.preventDefault();

//     console.log(`Form submitted`);    

// }
 return (

    <div className="card-main">
      {isOpen ? null : (
        <div className="button">
          <Button
            onClick={() => {
              setIsOpen(true);
            }}

          >
            Create the Class
          </Button>
        </div>
      )}


      
      {isOpen ? (
        <div className="card-box">
          <form onSubmit = {handleSubmit}>
            {/*} // <div className="col">
                //         <div className="input"><input type="text" placeholder="Class Timming" onChange={((e) =>{
                //             setClassTimming(e.target.value)
                //         })}/></div>
                //         <div className="input"><input type="text" placeholder="schdulle of the class" onChange={((e) =>{
                //             setSadulle(e.target.value)
                //         })} /></div>
                //         </div>
                //         <div className="col">
                //         <div className="input"><input type="text" placeholder="Teacher's name" onChange={((e) =>{
                //             setTeacherName(e.target.value)
                //         })}/></div>
                //         <div className="input"><input type="text" placeholder="section name" 
                //         onChange={((e) =>{
                //             setSectionName(e.target.value)
                //         })}/></div>
                //         </div>
                //         <div className="col">
                //         <div className="input"><input type="text" placeholder="course name" 
                //         onChange={((e) =>{
                //             setClassName(e.target.value)
                //         })} /></div>
                //         <div className="input"><input type="text" placeholder="Batch number" 
                //         onChange={((e) =>{
                //             setBatchName(e.target.value)
                //         })}/></div>
                //         </div>
                //         <div className="col">
                //         <div className="button"><button type="submit">Submit</button></div>
                //         <div className="but"><button onClick={(() => {
                //             setIsOpen(false)
                //         })}>Cancel</button></div>
         //         </div>*/}
            <div>
              <TextField
                id="outlined-basic"
                label="Class Name"
                variant="outlined"
                onChange={(e) => {
                  setClassName(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Section Name"
                variant="outlined"
                onChange={(e) => {
                  setSectionName(e.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Teacher Name"
                variant="outlined"
                onChange={(e) => {
                  setTeacherName(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Batch Number"
                variant="outlined"
                onChange={(e) => {
                  setBatchName(e.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Sadulle"
                variant="outlined"
                onChange={(e) => {
                  setSadulle(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Class timming"
                variant="outlined"
                onChange={(e) => {
                  setClassTimming(e.target.value);
                }}
              />
            </div>
            <div>

              <Button variant="contained" type="submit">Submit</Button>
              <Button variant="contained" onClick={(() => {
                setIsOpen(false)
              })}>Cancel</Button>

            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Classadd;
