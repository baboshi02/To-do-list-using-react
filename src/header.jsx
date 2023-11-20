import { useRef } from "react";
export default function Header({ updateList }) {
  const name = useRef();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name.current.value) return;
    updateList(name.current.value);
    name.current.value = "";
  };
  return (
    <>
      <div className="pt-2 text-SecondaryColor pb-1" onSubmit={handlesubmit}>
        <form>
          <input
            type="text"
            className="bg-gray-600 text-center mr-1 text-gray-400"
            ref={name}
            placeholder="ADD TO DO"
          />
          <button className="bg-PrimaryColor" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
