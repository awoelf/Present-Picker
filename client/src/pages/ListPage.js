import React from "react";

function ListPage() {
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">List Name</h1>
        <h6 className="card-text">Description of list</h6>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            List Theme
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Christmas (secular)
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Christmas (religious)
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Birthday
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="btn add-item">
          <i class="bi bi-plus-square"></i>Add Item
        </a>
        <a href="#" className="btn save-list">
          <i class="bi bi-box-arrow-down"></i>Save List
        </a>
        <ul>
          <li className="list-item">
            Blender $59.99 - Target <i class="bi bi-pencil"></i>
            <i class="bi bi-trash"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListPage;
