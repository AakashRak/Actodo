// function Landing()
// {
//   return(
//     <h1>Landing</h1>
//   )   
// }

// export default Landing

import Header from "../components/Header";
import Card from "../components/Card";
import Todo from "../components/Todo";
import { useLocation } from "react-router-dom"

function Landing() 
{
   const data=useLocation()

  return (
    <div className="bg-black p-12">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header name={data.state.user}/>

        {/* Card */}

        <div className="flex justify-between gap-5 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} tittle={"23"} subtittle={"Chennai"} />
          <Card
            bgcolor={"#FD6663"}
            tittle={"December 20"}
            subtittle={"14:23:08"}
          />
          <Card
            bgcolor={"#FCA201"}
            tittle={"Built Using"}
            subtittle={"React"}
          />
        </div>
        {/* TodoContainer */}
        <div>
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default Landing;
   