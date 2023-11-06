import Search from "./Search";
import UserListTable from "./UserListTable";

const UserList = () => {
  return (
    <main className="main">
      <section className="card users-container">
        <Search />
        <UserListTable />

        <button className="btn-add btn">Add new user</button>
      </section>
    </main>
  );
};

export default UserList;
