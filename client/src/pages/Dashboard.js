import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from "@apollo/client";
import {
  QUERY_USER,
  QUERY_ME,
  QUERY_SINGLE_LIST,
  QUERY_LISTS,
} from "../utils/queries";
import { ADD_LIST } from "../utils/mutations";
import Auth from "../utils/auth";
import List from "../components/Lists/List";

const Dashboard = () => {
  const [listName, setListName] = useState("");

  const [characterCount, setCharacterCount] = useState(0);
  const {
    loading: meLoading,
    data: meData,
    error: meError,
  } = useQuery(QUERY_ME);
  const me = meData?.me || meData?.currentID || {};
  // console.log(me)
  const [addList, { error }] = useMutation(ADD_LIST);
  // const [addList, { error }] = useMutation(ADD_LIST, {
  //   update(cache, { data: { addList } }) {
  //     try {
  //       const { lists } = cache.readQuery({ query: QUERY_LISTS }) || [];
  //       console.log(lists);
  //       cache.writeQuery({
  //         query: QUERY_LISTS,
  //         data: { lists: [addList, ...lists] },
  //       });
  //     } catch (err) {
  //       console.error(JSON.parse(JSON.stringify(err)));
  //     }

  //     // update me object's cache
  //     const { me } = cache.readQuery({ query: QUERY_ME });
  //     cache.writeQuery({
  //       query: QUERY_ME,
  //       data: { me: { ...me, lists: [...me.lists, listName] } },
  //     });
  //   },
  // });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // const { data } = await addList({
      //   variables: {
      //     listName,
      //     listAuthor: me.email,
      //   },
      // });
      addList({
        variables: {
          listName,
          listAuthor: "placeholder",
        },
      });
      // // console.log(data);
      setListName(listName);
    } catch (err) {
      console.error(JSON.parse(JSON.stringify(err)));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "listName" && value.length <= 280) {
      setListName(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className="container">
      <h3>Create your list</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12">
              <textarea
                name="listName"
                placeholder="Here's a new list..."
                value={listName}
                className="form-input w-100 rounded-1"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12">
              <button
                className="btn bg-black text-white btn-block py-3 px-5"
                type="submit"
              >
                Add List
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a list. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default Dashboard;
