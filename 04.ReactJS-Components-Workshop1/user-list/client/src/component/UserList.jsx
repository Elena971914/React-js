import Search from "./Search";
import UserListTable from "./UserListTable";

const UserList = () => {
  return (
    <main className="main">
        
      <section className="card users-container">

        <Search />
        <UserListTable />

      </section>

    </main>
  );
};

export default UserList;
