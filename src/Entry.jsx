import { useRef, useState } from "react";
const Button = ({ entry, text, OnClick }) => {
  return (
    <button
      onClick={() => OnClick(entry)}
      className="bg-PrimaryColor ml-0.5 text-SecondaryColor hover:bg-gray-800 rounded-sm "
    >
      {text}
    </button>
  );
};



export default function Entry({
  list,
  entry,
  deleteList,
  index,
  editList,
  editing,
  setEditing,
}) {
  const [checked,setChecked]=useState(false)
  const handleCheck=()=>{
    setChecked(!checked)
  }
  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };
  const handleEditing = () => {
    const isEditing =
      editing.isEditing && editing.index === index ? false : true;
    setEditing({
      ...editing,
      index,
      isEditing,
    });
  };
  const handleChange = (e) => {
    editList(e.target.value, index);
  };
  const editingContent = (
    <input
      className="bg-gray-500 text-center"
      type="text"
      value={entry}
      onChange={handleChange}
      onKeyDown={handleUpdatedDone}
      autoFocus
    />
  );
  const content =
    editing.index === index && editing.isEditing ? editingContent : entry;

  return (
    <div>
      <div className={checked?"bg-gray-600 relative mb-0.5 rounded-md line-through ":"bg-gray-500 relative mb-0.5 rounded-md "}  >
        <span className=" absolute left-0">
            <Button entry={entry} text={checked?"Uncheck":'Check'}  OnClick={handleCheck}  />
        </span>
        {content}
        <span className="absolute right-0">
          <Button entry={entry} text={"Delete"} OnClick={deleteList} />
          <Button entry={entry} text={"Edit"} OnClick={handleEditing} />
        </span>
      </div>
    </div>
  );
}


