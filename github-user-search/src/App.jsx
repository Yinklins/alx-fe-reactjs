import { useState } from "react";
import SearchBar from "./components/searchBar";
import UserCard from "./components/userCard";
import { searchUsers } from "./services/githubApi";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    const data = await searchUsers(query);
    setUsers(data.items || []);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
