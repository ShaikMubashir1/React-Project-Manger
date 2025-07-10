import { useState } from "react";

function ProjectDetails({ Details, onCloseAdding, onAdding, Index }) {
  const $Btn = "w-fit px-4 py-2 rounded text-nowrap";
  const [enteredText, setEnteredText] = useState("");

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const AddTodo = (event) => {
    event.preventDefault();
    setEnteredText("");
  };

  function Toggle() {
    Details.splice(Index, 1);
    onCloseAdding();
    onAdding();
  }

  return (
    <div className=" flex flex-col gap-5 w-full md:pl-10 p-4">
      <div className="flex w-full justify-between " id={Details[Index].id}>
        <div className=" flex flex-col gap-3">
          <h2 className=" text-stone-900 font-bold text-3xl">
            {Details[Index].$Title}
          </h2>
          <p className=" text-stone-400">{Details[Index].$Date}</p>
        </div>
        <div>
          <button className={$Btn} onClick={Toggle}>
            Delete
          </button>
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <h2 className=" text-stone-800 text-xl">{Details[Index].$Title}</h2>
        <p>{Details[Index].$Des}</p>
      </div>
      <hr className=" border-2 border-stone-300" />
      <div className=" flex flex-col gap-3">
        <h2 className=" text-stone-900 font-bold text-3xl ">Tasks</h2>
        <form onSubmit={AddTodo} className=" flex ">
          <input
            type="text"
            className=" bg-stone-400 rounded w-full md:w-2/4 p-3"
            required
            value={enteredText}
            onChange={textChangeHandler}
          />
          <button
            className={$Btn}
            onClick={() => {
              if (enteredText === " " || enteredText === "") {
              } else {
                Details[Index].array.push({
                  id: Math.random().toString(),
                  $Text: enteredText,
                });
              }
            }}
          >
            Add Task
          </button>
        </form>
      </div>
      <div className=" w-full md:w-9/12 bg-stone-300 p-5">
        <form onSubmit={AddTodo}>
          {Details[Index].array.map((List) => (
            <li className=" flex justify-between items-center " key={List.id}>
              <p>{List.$Text}</p>
              <button
                onClick={() => {
                  Details[Index].array.splice(
                    Details[Index].array.indexOf(List),
                    1
                  );
                  setEnteredText(" ");
                }}
                className={`${$Btn} pr-1 hover:text-red-700`}
              >
                Clear
              </button>
            </li>
          ))}
        </form>
      </div>
    </div>
  );
}

export default ProjectDetails;
