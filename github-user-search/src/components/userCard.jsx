function UserCard({ user }) {
  return (
    <div className="border p-4 rounded mb-3 shadow-sm">
      <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
      <h3 className="font-bold">{user.login}</h3>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        View Profile
      </a>
    </div>
  );
}

export default UserCard;
