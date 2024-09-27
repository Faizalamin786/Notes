import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

export default function Layout({ children }) {
  const { searchValue, searchValueOnChange } = useContext(NotesContext);
  return (
    <>
      <nav className="flex flex-col items-center justify-center py-4 text-white bg-slate-800">
        <h1 className="text-2xl font-bold">Sticky Notes App</h1>
        <form className="my-1">
          <input
            onChange={(e) => searchValueOnChange(e)}
            type="text"
            value={searchValue}
            placeholder="Search by term..."
            className="p-1 text-center rounded focus:border-2 border-slate-400 text-black"
          />
        </form>
      </nav>
      <main className="flex flex-col items-center justify-center w-full h-screen bg-slate-700">
        {children}
      </main>
      <footer className="flex flex-col items-center justify-center py-3 bg-slate-800 text-white">
        <p>Created by Faizal</p>
        <div className="flex gap-2">
          <a href="https://github.com/Faizalamin786" target="_blank">
            <i className="bi bi-github" />
          </a>
          <a href="mailto:faizalamin0007@gmail.com">
            <i className="bi bi-envelope-fill" />
          </a>
        </div>
      </footer>
    </>
  );
}
