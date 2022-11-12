import Login from "./login";
import Classadd from "./entercard";



function Body(){

    const [isLit , setIsLit] = useState(true);
    return(<div className="main-body">
    {
        (isLit) ?
        <Login />
        :
        <Classadd/>
    }
        </div>)
}

export default Body;