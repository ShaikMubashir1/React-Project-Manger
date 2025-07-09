import { useState } from "react";

function AddProject({ onCloseAdding, onAddTodo }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDes, setEnteredDes] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const $Label = "uppercase text-stone-700 font-semibold w-fit";
  const $Input =
    " bg-stone-500 text-white placeholder:text-white px-2 py-4 focus:outline-0 rounded";
  const $InputSection = "flex flex-col";
  const $Btn = "w-fit px-4 py-2 rounded";

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const DesChangeHandler = (event) => {
    setEnteredDes(event.target.value);
  };
  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onSubmitHandle = (event) => {
    event.preventDefault();
    const Todo = {
      id: Math.random().toString(),
      $Title: enteredTitle,
      $Date: enteredDate,
      $Des: enteredDes,
      array: [],
    };
    onAddTodo(Todo);
    onCloseAdding();
  };
  return (
    <div className="flex justify-end w-full md:pl-10 p-5 mt-10">
      <form onSubmit={onSubmitHandle} className=" w-full ">
        <div className=" flex justify-end gap-1 md:mb-10 mb-5">
          <div
            onClick={onCloseAdding}
            className={`text-stone-800 cursor-pointer ${$Btn}`}
          >
            Cancel
          </div>
          <button type="submit" className={` bg-stone-800 text-white ${$Btn}`}>
            Save
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className={$InputSection}>
            <label className={$Label} for="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={titleChangeHandler}
              placeholder="Enter your project name"
              className={$Input}
              required
            />
          </div>
          <div className={$InputSection}>
            <label className={$Label} for="des">
              Description
            </label>
            <textarea
              id="des"
              placeholder="Enter your description"
              className={`${$Input} pb-10`}
              onChange={DesChangeHandler}
              required
            ></textarea>
          </div>
          <div className={$InputSection}>
            <label className={$Label} for="date">
              Due Date
            </label>
            <input
              type="date"
              id="date"
              onChange={DateChangeHandler}
              className={$Input}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProject;
