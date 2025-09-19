import useRecipeStore from "./recipeStore";

function SearchBar() {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 border rounded mb-4"
    />
  );
}

export default SearchBar;
