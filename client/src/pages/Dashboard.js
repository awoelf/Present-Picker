// Spacing is off. No functionality.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME, QUERY_SINGLE_LIST, QUERY_LISTS } from '../utils/queries';
import { ADD_LIST } from '../utils/mutations';
import Auth from '../utils/auth';
import List from '../components/Lists/List';

const Dashboard = () => {
  const [listName, setListName] = useState('');

  const [characterCount, setCharacterCount] = useState(0);
  // const {loading: meLoading, data: meData, error: meError}=useQuery(QUERY_ME)
  // const me = meData?.me || meData?.currentID || {}
  // console.log(me)
  const [addList, {error}] = useMutation(ADD_LIST);
  // const [addList, { error }] = useMutation(ADD_LIST, {
    // update(cache, { data: { addList } }) {
    //   try {
    //     const { lists } = cache.readQuery({ query: QUERY_LISTS }) || [];
    //       console.log(lists)
    //     cache.writeQuery({
    //       query: QUERY_LISTS,
    //       data: { lists: [addList, ...lists] },
    //     });
    //   } catch (err) {
    //     console.error(JSON.parse(JSON.stringify(err)));
    //   }

    //   // update me object's cache
    //   const { me } = cache.readQuery({ query: QUERY_ME });
    //   cache.writeQuery({
    //     query: QUERY_ME,
    //     data: { me: { ...me, lists: [...me.lists, listName] } },
    //   });
    // },
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
      addList({variables: {
            listName,
            listAuthor: 'placeholder'
          }})
// // console.log(data);
      setListName(listName);
    } catch (err) {
      console.error(JSON.parse(JSON.stringify(err)));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'listName' && value.length <= 280) {
      setListName(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Create your list</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="listName"
                placeholder="Here's a new list..."
                value={listName}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
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
          You need to be logged in to add a list. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

//original code

// function Dashboard() {
//   const { email } = useParams();
//   const addList = useMutation(ADD_LIST);
//   const { loading, data } = useQuery(email ? QUERY_USER : QUERY_ME, {
//     variables: { email },
//   });

//   const user = data?.me || data?.user || {};
//   if (Auth.loggedIn() && Auth.getProfile().data.email === useParams) {
//     return <Navigate to='/me' />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user.email) {
//     return (
//       <h4 className='text-center mt-5'>
//         You need to be logged in to see this. <br></br> Use the navigation links
//         above to sign up or log in!
//       </h4>
//     );
//   }

//   const handleAddList = () => {
//     // ADD NEW LIST
//     addList({
//       variables: {listName: 'New List', listAuthor: email}
//     })
//     // NAVIGATE TO LIST PAGE OF NEW LIST
//   };

//   return (
//     <div className='container'>
//       <h1 className='text-center'>Dashboard</h1>
//       <div className='card'>
//         <div className='card-body'>
//           <a
//             className='btn btn-dark m-2 add-item py-3 px-4'
//             onClick={handleAddList}
//           >
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               width='16'
//               height='16'
//               fill='currentColor'
//               class='bi bi-plus-square'
//               viewBox='0 0 16 16'
//             >
//               <path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
//               <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
//             </svg>{' '}
//             Add List
//           </a>
//           <ul className='row '>
//             {data.lists
//               ? data.lists.map((list) => {
//                   <List id={list.id} listId={list.id} />;
//                 })
//               : null}
//             <li className='saved-lists row d-inline bg-success rounded-1 p-2 text-white mt-1'>
//               <span className='list-name col-6'>Gifts for my friends</span>
//               <span className='number-of-items col-6'>5 items</span>
//               <span className='send-list'>
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='16'
//                   height='16'
//                   fill='currentColor'
//                   class='bi bi-envelope'
//                   viewBox='0 0 16 16'
//                 >
//                   <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
//                 </svg>
//               </span>
//               <span className='edit-list'>
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='16'
//                   height='16'
//                   fill='currentColor'
//                   class='bi bi-pencil'
//                   viewBox='0 0 16 16'
//                 >
//                   <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
//                 </svg>
//               </span>
//               <span className='delete-list'>
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='16'
//                   height='16'
//                   fill='currentColor'
//                   class='bi bi-trash'
//                   viewBox='0 0 16 16'
//                 >
//                   <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
//                   <path
//                     fill-rule='evenodd'
//                     d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
//                   />
//                 </svg>
//               </span>
//             </li>
//             <li className='saved-lists row d-inline bg-success rounded-1 p-2 text-white mt-1'>
//               <span className='list-name col-6'>Gifts for my cat</span>
//               <span className='number-of-items col-6'>70 items</span>
//               <span className='send-list'>
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='16'
//                   height='16'
//                   fill='currentColor'
//                   class='bi bi-envelope'
//                   viewBox='0 0 16 16'
//                 >
//                   <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
//                 </svg>
//               </span>
//               <span className='edit-list'>
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='16'
//                   height='16'
//                   fill='currentColor'
//                   class='bi bi-pencil'
//                   viewBox='0 0 16 16'
//                 >
//                   <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
//                 </svg>
//               </span>
//               <span className='delete-list'>
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   width='16'
//                   height='16'
//                   fill='currentColor'
//                   class='bi bi-trash'
//                   viewBox='0 0 16 16'
//                 >
//                   <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
//                   <path
//                     fill-rule='evenodd'
//                     d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
//                   />
//                 </svg>
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Dashboard;
