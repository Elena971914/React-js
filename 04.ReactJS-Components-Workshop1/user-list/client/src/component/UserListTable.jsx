import UserListItem from "./UserListItem";
import * as userService from "../services/userService";
import { useEffect, useState } from "react";
import CreateUserModal from "./CreateUserModal";
import UserInfoModal from "./UserInfoModal";
import DeleteUserModal from "./DeleteUserModal";

const UserListTable = () => {
  const [users, setUsers] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null)
  const [showDelete, setShowDelete] = useState(false);

  // initially get all users from the server and store it in a list and re-render them when there is a change in the users list
  useEffect(() => {
    userService
      .getAll()
      .then((result) => setUsers(result))
      .catch((err) => console.log(err));
  }, [users]);

  // show create user modal
  const createUserClickHandler = (user) => {
    setShowCreate(true);
  };

  // hide create user modal
  const hideModalHandler = () => {
    setShowCreate(false);
  };

  const onSaveHandler = async (e) => {
    // stop page from reloading
    e.preventDefault();
    //get data from form data
    const formData = new FormData(e.currentTarget);
    //create new user at the server
    const data = Object.fromEntries(formData);
    const newUser = await userService.create(data);
    //add newly created user to the local state
    setUsers((state) => [...state, newUser]);
    //close the modal
    setShowCreate(false);
  };

  const userInfoClickHandler = async (userId) => {
    setSelectedUser(userId)
    setShowInfo(true)
  }

  const userDeleteClickHandler = async (id) => {
    setShowDelete(true)
    setSelectedUser(id)
  }

  const deleteUserHandler = async () => {
    //remove user from server
    await userService.deleteUser(selectedUser)
    //remove from table
    setUsers(state => state.filter(user => user._id ==! selectedUser))
    //close delete modal 
    setShowDelete(false)
  }

  return (
    <div className="table-wrapper">
      {showCreate && (
        <CreateUserModal hideModal={hideModalHandler} onSave={onSaveHandler}/>
      )}

      {showInfo && <UserInfoModal onClose={() => setShowInfo(false)} userId={selectedUser}/>}

      {showDelete && <DeleteUserModal onClose={() => setShowDelete(false)} onDelete={deleteUserHandler}/>}

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>
              First name
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Last name
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Email
              <svg
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Phone
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>
              Created
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-down"
                className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                ></path>
              </svg>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserListItem {...user} key={user._id} _id={user._id} onInfoClick={userInfoClickHandler} onDeleteClick={userDeleteClickHandler}/>
          ))}
        </tbody>
      </table>

      <button onClick={createUserClickHandler} className="btn-add btn">
        Add new user
      </button>
    </div>
  );
};

export default UserListTable;
