import React, { useEffect, useState } from "react";
import { categories, priorities } from "./constant";

const Mainpage = () => {
  const [alltask, setalltask] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || [],
  );
  const completetask = alltask.filter((t) => t.isCompleted).length;
  const notcompletedtask = alltask.length - completetask;
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [priority, setpriority] = useState("");
  const [date, setdate] = useState("");

  const [task, settask] = useState("");
  const [subtask, setsubtask] = useState([]);
  const [ispopshow, setispopshow] = useState(false);
  const [isupdated, setisupdated] = useState(false);
  const [editindex, seteditindex] = useState(null);

  function resetall() {
    settitle("");
    setdescription("");

    setcategory("");
    setpriority("");
    setdate("");
    setsubtask([]);
    settask("");
  }

  // function background() {}
  const [customformat] = useState(() => {
    const now = new Date();

    return now.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  });
  console.log("Custom Local Date & Time:", customformat);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(alltask));
  }, [alltask]);

  const addsubtask = (e) => {
    e.preventDefault();

    setsubtask([...subtask, { title: task, isCompleted: false }]);

    settask("");
  };

  document.addEventListener("keydown", function (event) {
    // Check if the pressed key is Escape
    if (event.key === "Escape" || event.keyCode === 27) {
      setispopshow(false);
    }
  });

  return (
    <>
      <header className="border h-20 w-full flex justify-between">
        <img
          src="https://imgcdn.stablediffusionweb.com/2024/3/9/c6ea09e5-49fc-4955-83ea-403e5209e947.jpg"
          className="rounded h-15 w-20 m-4"
        />
        <button
          className="button-42"
          onClick={(e) => {
            e.preventDefault();
            setispopshow(true);
          }}
        >
          Add task
        </button>
      </header>

      {ispopshow ? (
        <form className="ml-20 flex justify-center items-center">
          <fieldset className="border-2  w-90 rounded-2xl min-h-130 pl-3">
            <legend className="text-2xl">Task List</legend>
            <label>Title</label>
            <br />
            <input
              type="text"
              value={title}
              placeholder="enter your task title"
              className=" border-2 border-blue-700  h-8 w-80 rounded"
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            <br />
            <label>Description</label>
            <br />
            <input
              type="text"
              value={description}
              placeholder="description of your text"
              className=" border-2 border-blue-700  h-8 w-80 rounded"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <br />
            <label>Category</label>

            <select
              value={category}
              name="category"
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              className="border-2 border-blue-500 rounded m-2"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.name}
                </option>
              ))}
            </select>
            <label>Priority</label>
            <select
              value={priority}
              name="priority"
              onChange={(e) => {
                setpriority(e.target.value);
              }}
              className="border-2 rounded border-blue-500"
            >
              {priorities.map((prio) => (
                <option key={prio.value} value={prio.value}>
                  {prio.name}
                </option>
              ))}
            </select>
            <br />

            <p className=" border-2 border-blue-700  h-8 w-88 rounded">
              {customformat}
            </p>
            <label>Sub Task</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={task}
                onChange={(e) => {
                  settask(e.target.value);
                }}
                className=" border-2 border-blue-700  rounded"
              />
              <button className="button-91" onClick={addsubtask}>
                Add
              </button>
            </div>
            <ul>
              {subtask.map((task, i) => (
                // <option name="subtask" value={task}>{task}</option>
                <li key={i}>
                  <input
                    type="checkbox"
                    className=" border-2 border-blue-700 rounded h-5 w-5 mt-2"
                  />
                  <label>{task.title}</label>
                  <button
                    onClick={() => {
                      const duplicatesubtask = [...subtask];
                      duplicatesubtask.splice(i, 1);
                      setsubtask(duplicatesubtask);
                    }}
                    className="button-3"
                  >
                    delete
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex">
              <button
                className="button-72"
                onClick={(e) => {
                  e.preventDefault();

                  if (isupdated) {
                    setalltask((prev) =>
                      prev.map((item, index) =>
                        index === editindex
                          ? {
                              title: title,
                              description: description,
                              category: category,
                              priority: priority,
                              date: date,
                              subtask: subtask,
                              isCompleted: false,
                            }
                          : item,
                      ),
                    );

                    setisupdated(false);
                    seteditindex(null);
                  } else {
                    setalltask((pre) => [
                      {
                        title,
                        description,
                        category,
                        priority,
                        date,
                        subtask,
                        isCompleted: false,
                      },
                      ...pre,
                    ]);
                  }
                  resetall();
                  setispopshow(false);

                  setisupdated(false);
                }}
              >
                Submit
              </button>
              <button
                className="button-77"
                type="button"
                onClick={() => {
                  resetall();
                  setispopshow(false);
                }}
              >
                Cancel
              </button>
            </div>
          </fieldset>
        </form>
      ) : (
        <div className="flex p-10 gap-2">
          <aside className="h-170 bg-amber-200 w-80 rounded-2xl ">
            <p className="m-2 text-xl">Title</p>
            <ol className="m-2">
              {alltask.map((task, i) => (
                <li>{task.title}</li>
              ))}
            </ol>
            <p className="m-2 text-xl">Category</p>
            <ol
              value={category}
              name="category"
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              className="m-2"
            >
              {categories.map((prio) => (
                <li key={prio.value} value={prio.value}>
                  {prio.name}
                </li>
              ))}
            </ol>
            <p className="m-2 text-xl">Priority</p>
            <ol
              value={priority}
              name="priority"
              onChange={(e) => {
                setpriority(e.target.value);
              }}
              className="m-2"
            >
              {priorities.map((prio) => (
                <li key={prio.value} value={prio.value}>
                  {prio.name}
                </li>
              ))}
            </ol>
          </aside>
          <div>
            <div className="flex gap-4 mb-3">
              <div className=" p-4  flex gap-2 min-h-15 min-w-55 border-1 border-pink-400 bg-white rounded-2xl">
                <select
                  name="title"
                  defaultValue=""
                  className="text-black bg-white border rounded p-1"
                >
                  <option value="" disabled>
                    All task
                  </option>
                  {alltask.map((task, i) => (
                    <option
                      key={i}
                      value={task.title}
                      className="text-black bg-white"
                    >
                      {task.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className=" p-4 text-pink-400 flex gap-2 h-15 w-55 border-1 border-pink-400 bg-white rounded-2xl">
                Total task
                <div className="h-7 w-7 rounded-4xl border-2 pl-1.5">
                  {" "}
                  {alltask.length}
                </div>
              </div>
              <div className=" p-4 text-pink-400 flex gap-2 h-15 w-55 border-1 border-pink-400 bg-white rounded-2xl">
                Completed
                <div className="h-7 w-7 rounded-4xl border-2 pl-1.5">
                  {completetask}
                </div>
              </div>
              <div className=" p-4 text-pink-400  h-15 w-55 flex gap-2 border-1 border-pink-400 bg-white rounded-2xl">
                Pending
                <div className="h-7 w-7 rounded-4xl border-2 pl-1.5">
                  {notcompletedtask}
                </div>
              </div>
            </div>
            <div className=" border w-full rounded-2xl pl-10">
              {alltask.map((task, i) => (
                <div
                  key={i}
                  className={`border-2 h-auto w-200 mt-5 rounded flex pl-5 `}
                >
                  <div>
                    <div
                      id={i}
                      className={`h-10 w-55 p-2 text-black rounded-2xl border-2 border-pink-500  ${task.isCompleted ? "btn2" : ""} `}
                    >
                      {task.isCompleted ? (
                        <p>this task is completed</p>
                      ) : (
                        <p>This task is not completed</p>
                      )}
                    </div>

                    <button
                      disabled={task.isCompleted}
                      onClick={() =>
                        setalltask((prev) =>
                          prev.map((t, idx) =>
                            idx === i ? { ...t, isCompleted: true } : t,
                          ),
                        )
                      }
                    >
                      ✅
                    </button>
                    <button
                      disabled={!task.isCompleted}
                      onClick={() =>
                        setalltask((prev) =>
                          prev.map((t, idx) =>
                            idx === i ? { ...t, isCompleted: false } : t,
                          ),
                        )
                      }
                    >
                      ❌
                    </button>
                    <p>title:{task.title}</p>
                    <p>Description:{task.description}</p>
                    <p>category:{task.category}</p>
                    <p>priority:{task.priority}</p>
                    <p>Date:{customformat}</p>

                    <div>
                      {task.subtask.map((subtask, j) => (
                        <div
                          key={i}
                          className="flex justify-between gap-3 items-center"
                        >
                          <div
                            className="cursor-pointer border mt-2"
                            onClick={() => {
                              const duplicatesubtask = [...task.subtask];
                              duplicatesubtask[j].isCompleted = true;

                              const newUpdatedTasks = [...alltask];
                              newUpdatedTasks[i].subtask = duplicatesubtask;

                              setalltask(newUpdatedTasks);
                            }}
                          >
                            <input
                              type="checkbox"
                              className="border"
                              checked={subtask.isCompleted ? true : false}
                            />

                            <label
                              className={`${subtask.isCompleted ? "text-green-600" : "text-black"}`}
                            >
                              {" "}
                              {subtask.title}
                            </label>
                          </div>

                          <button
                            className="btn-rainbow-shift"
                            onClick={() => {
                              const duplicatesubtask = [...task.subtask];
                              duplicatesubtask.splice(j, 1);

                              const newUpdatedTasks = [...alltask];
                              newUpdatedTasks[i].subtask = duplicatesubtask;

                              setalltask(newUpdatedTasks);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn-neo-pressed"
                      onClick={(e) => {
                        e.preventDefault();
                        const duplicatetask = [...alltask];
                        duplicatetask.splice(i, 1);
                        setalltask(duplicatetask);
                      }}
                    >
                      Del
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn-neo-concave"
                      type="button"
                      onClick={(e) => {
                        console.log(alltask[i]);
                        seteditindex(i);
                        settitle(alltask[i].title);
                        setdescription(alltask[i].description);
                        setcategory(alltask[i].category);
                        setpriority(alltask[i].priority);
                        setdate(alltask[i].date);

                        setsubtask(alltask[i].subtask);

                        setisupdated(true);
                        setispopshow(true);
                      }}
                    >
                      edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mainpage;
