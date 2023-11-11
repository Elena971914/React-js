import TableRow from "./TableRow";
import * as services from "../services/services";
import { useState, useEffect } from "react";
import CreateUserModal from "./CreateUserModal";
import DeleteModal from "./DeleteModal";
import UserDetailsModal from "./UserDetailsModal";
import EditUserModal from "./EditUserModal";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [showEdit, setShowEdit] = useState(false)

  useEffect(() => {
    services
      .getAllUsers()
      .then((result) => setUsers(result))
      .catch((err) => console.log(err));
  }, []);

  const createUserClickHandler = () => {
    setShowCreateUser(true);
  };

  const saveUserClickHandler = async (e) => {
    try {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const result = Object.fromEntries(data);
      const newUser = await services.createUser(result);
      setUsers(state=> [...state, newUser] )
      setShowCreateUser(false)
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteHandler = (id) => {
    setSelectedUser(id)
    setShowDeleteModal(true)
  }

  const confirmDeletionHandler = async () => {
    await services.deleteUser(selectedUser)
    setUsers(state => state.filter(user => user.id ==! selectedUser))
    setShowDeleteModal(false)
  }

  const infoClickHandler = (id) => {
    setSelectedUser(id)
    setShowInfo(true)
  }

  const editClickHandler = (id) => {
    setSelectedUser(id)
    setShowEdit(true)
  }

  const onSaveEditHandler = async(e) => {
    try {
      e.preventDefault()
      const result= new FormData(e.currentTarget);
      const data = Object.fromEntries(result);
      const id = selectedUser
      await services.editUser(data, id)
      // setUsers(state=> [...state])
      setShowEdit(false)
    } catch(error) {
      console.log(error)}}

  return (
    <div className="table-wrapper">
      {showCreateUser && (
        <CreateUserModal
          onClose={() => setShowCreateUser(false)}
          onSave={saveUserClickHandler}
        />
      )}

      {showDeleteModal && (<DeleteModal onDelete={confirmDeletionHandler} onClose={()=>setShowDeleteModal(false)}/>)}

      {showInfo && (<UserDetailsModal onClose={() => setShowInfo(false)} id={selectedUser}/>)} 

      {showEdit && (<EditUserModal onClose={() => setShowEdit(false)} id={selectedUser} onSave={onSaveEditHandler}/>)}

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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableRow {...user} key={user._id} _id={user._id} onDelete={onDeleteHandler} onInfoClick={infoClickHandler} onEditClick={editClickHandler}
            />
          ))}
        </tbody>
      </table>

      <button className="btn-add btn" onClick={createUserClickHandler}>
        Add new user
      </button>
    </div>
  );
}

export default Table;
