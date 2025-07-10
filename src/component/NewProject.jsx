function NewProject({ onAdding }) {
  return (
    <div className=" flex justify-center w-full mt-10 md:py-10">
      <div className=" flex flex-col justify-start items-center gap-5 ">
        <img src="./no-projects.png" alt="Image" className=" w-20 md:w-40 " />
        <h2 className=" text-stone-600 font-bold text-2xl">
          No Project Selected
        </h2>
        <p className="text-stone-700">
          Select a new project to get started with a new one
        </p>
        <button
          className=" text-stone-400 bg-stone-700 rounded-lg px-5 py-2"
          onClick={onAdding}
        >
          Create new project
        </button>
      </div>
    </div>
  );
}

export default NewProject;
