import { useState } from "react";
import Body from "./body";
import Header from "./header";

export default function App() {
  const [list, setList] = useState([]);
  const editList = (updatedtitle, index) => {
    const newList = [...list];
    newList[index] = updatedtitle;
    setList(newList);
  };
  const updateList = (entry) => {
    setList([...list, entry]);
  };

  const deleteList = (entry) => {
    let deleted = list.filter((element) => {
      return element != entry;
    });
    setList(deleted);
  };
  const Button =
    list.length > 1 ? (
      <button
        className="bg-red-600 rounded-md p-.5 relative top-3"
        onClick={() => setList([])}
      >
        remove all
      </button>
    ) : (
      <div></div>
    );

  return (
    <div className=" text-PrimaryColor text-center text-xl">
      <h1 className="  text-7xl text-SecondaryColor">TODO LIST</h1>
      <div className="bg-gray-700 mx-11 rounded-md p-8 pt-1 relative">
        <Header updateList={updateList} />
        <Body list={list} deleteList={deleteList} editList={editList} />
        {Button}
      </div>
    </div>
  );
}
