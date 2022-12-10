import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { ThemeContext } from "../Theme";
import ListBirthday from "../styles/ListBirthday.css";
import ListChristmas from "../styles/ListChristmas.css";
import ListHalloween from "../styles/ListHalloween.css";

// import { Navigate, useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";

// import { QUERY_USER, QUERY_ME } from "../utils/queries";
// import Auth from "../utils/auth";

// Need to add functionality to add, edit, delete, save, and change theme.

function ListPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // const { email } = useParams();

  // const { loading, data } = useQuery(email ? QUERY_USER : QUERY_ME, {
  //   variables: { email },
  // });

  // const user = data?.me || data?.user || {};
  // if (Auth.loggedIn() && Auth.getProfile().data.email === useParams) {
  //   return <Navigate to="/me" />;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user.email) {
  //   return (
  //     <h4 className="text-center mt-5">
  //       You need to be logged in to see this. <br></br> Use the navigation links
  //       above to sign up or log in!
  //     </h4>
  //   );
  // }
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">List Name</h1>
        <h6 className="card-text">Description of list</h6>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            List Theme
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className="dropdown-item"
              onClick={() => toggleTheme()}
            >
              {ListBirthday}
              Birthday 🎉
            </Dropdown.Item>
            <Dropdown.Item
              className="dropdown-item"
              onClick={() => toggleTheme()}
            >
              {ListChristmas}
              Christmas 🎄
            </Dropdown.Item>
            <Dropdown.Item
              className="dropdown-item"
              onClick={() => toggleTheme()}
            >
              {ListHalloween}
              Halloween 🎃
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* Add item button will open the InputItem component */}
        <a href="#" className="btn add-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>{" "}
          Add Item
        </a>
        {/* Search item button will open the SearchItem component */}
        <a href="#" className="btn add-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>{" "}
          Search Item
        </a>
        <a href="#" className="btn save-list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
            />
            <path
              fillRule="evenodd"
              d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
            />
          </svg>{" "}
          Save List
        </a>
        <ul>
          {/* Displays items in list */}
          {/* When we have back end functionality, all items in list will be rendered with map function */}
          {/* <ListItem 
            itemId='12345'
          /> */}
          <li className="list-item">
            Blender $59.99 - Target{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListPage;
