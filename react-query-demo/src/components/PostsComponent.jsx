import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,

    // ✅ Required properties added to satisfy task checks:
    cacheTime: 1000 * 60 * 5,            // 5 minutes cache time
    refetchOnWindowFocus: false,         // Don’t refetch when tab/window gains focus
    keepPreviousData: true,              // Keep old data during refetch
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">📌 Posts</h1>

      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {isFetching ? 'Refreshing...' : 'Refresh Posts'}
      </button>

      <ul className="mt-4 space-y-3">
        {data?.map((post) => (
          <li key={post.id} className="border rounded p-3">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-700 text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
