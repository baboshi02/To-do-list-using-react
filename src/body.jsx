import { useState } from "react";
import Entry from "./Entry";



export default function Body({ list, deleteList, editList }) {
  const [editing, setEditing] = useState({
    index:-1,
    isEditing:false
  });

  const formattedlist = list.map((entry, index) => {
    if (entry.length > 0) {
      return (
        <Entry
          list={list}
          entry={entry}
          deleteList={deleteList}
          index={index}
          editList={editList}
          editing={editing}
          setEditing={setEditing}
        />
      );
    } else {
      deleteList(entry);
    }
  });
  return <div>{formattedlist}</div>;
}
