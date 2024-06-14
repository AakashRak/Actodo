function Card(props) {
  return (
    <div style={{ backgroundColor:props.bgcolor }}
      className="px-10 py-5 border rounded-md text-center flex-1">
      <h1 className="font-medium text-2xl">{props.tittle}</h1>
      <p>{props.subtittle}</p>
    </div>
    
      
  );
}

export default Card;
