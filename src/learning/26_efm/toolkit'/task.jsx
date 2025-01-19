import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { terminer,supprimer } from "./slice";

export default function Task() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="container mt-3 w-75">
      <h3>To Do List</h3>
      <div className="table-responsive text-center">
        <table className="table">
          <thead className="table table-warning">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Label</th>
              <th scope="col">Terminé</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>

                <td
                  className={
                    task.isComplet ? "text-decoration-line-through" : ""
                  }
                >
                  {task.label}
                </td>

                <td>{task.isComplet ? "Oui" : "Non"}</td>

                <td>
                  <button
                    className={`btn btn-sm me-2 ${
                      task.isComplet ? "btn-info" : "btn-success"
                    }`}
                    onClick={() => dispatch(terminer(task.id))}
                  >
                    {task.isComplet ? "En cours" : "Terminer"}
                  </button>
                </td>
                <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(supprimer(task.id))}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
