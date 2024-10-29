import React from "react";

function Note(props) {

  function handleClick(){
    props.onDelete(props.id); // Apelează funcția onDelete din App și îi transmite id-ul notiței
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
