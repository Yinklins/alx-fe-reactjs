// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService"; // ✅ include both

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState(null); // ✅ handle single-user search
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username && !location && !minRepos) {
      setError("Please enter at least one search criteria");
      return;
    }

    setLoading(true);
    setError("");
    setUsers([]);
    setSingleUser(null);

    try {
      if (username && !location && !minRepos) {
        // ✅ simple username search
        const data = await fetchUserData(username);
        setSingleUser(data);
      } else {
        // ✅ advanced search
        const data = await fetchAdvancedUsers(username, location, minRepos);
        setUsers(data.items || []);
      }
    } catch (err) {
      console.error(err);
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 sm:grid-cols-3 bg-white p-4 shadow rounded-md"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="sm:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* ✅ Display single user if only username was searched */}
      {singleUser && (
        <div className="mt-6 flex items-center gap-4 p-4 border rounded bg-gray-50 shadow-sm">
          <img
            src={singleUser.avatar_url}
            alt={singleUser.login}
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-lg font-bold">{singleUser.login}</h2>
            <a
              href={singleUser.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Profile
            </a>
          </div>
        </div>
      )}

      {/* ✅ Display multiple users for advanced search */}
      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 border rounded bg-gray-50 shadow-sm"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
