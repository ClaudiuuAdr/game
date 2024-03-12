import { useState, useId } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    name: "",
    pass: "",
  });
  const [succes, setSucces] = useState(false);

  const id = useId();
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);
  }
  return (
    <section>
      <div className=" z-10 mx-auto flex items-center justify-center rounded-md border-slate-600 bg-slate-200 bg-opacity-30 p-14 shadow-lg backdrop-filter backdrop:blur-lg md:w-[500px]">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center text-4xl font-bold">Login</h2>
          <div className="mt-7 flex items-center justify-center gap-4">
            <label htmlFor={id + "-name"} className="mx-[10px]">
              Name:
            </label>
            <input
              type="text"
              placeholder="Name"
              onChange={handleChange}
              name="name"
              value={form.name}
              id={id + "-name"}
              className="w-72 appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm focus:border-slate-600 focus:text-slate-600 focus:outline-none focus:ring-0 dark:focus:border-blue-500 "
            />
          </div>
          <div className="flex items-center justify-center gap-4 ">
            <label htmlFor={id + "-pass"}>Passowrd:</label>
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="pass"
              value={form.pass}
              id={id + "-pass"}
              className="block w-72 appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm focus:border-slate-600 focus:text-slate-600 focus:outline-none focus:ring-0 dark:focus:border-blue-500"
            />
          </div>
          <div className="mt-7 flex justify-center align-middle">
            <button className="rounded-md bg-slate-800 px-5 py-2 text-white hover:text-yellow-300 hover:opacity-90">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
