import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchFormProps {
  handleSearch: (query: string) => void;
}

function SearchForm({ handleSearch }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchQuery.trim() !== "") {
      handleSearch(searchQuery);
      navigate("/");
    }
  };

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSearchResults([]); // Clear previous search results
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex justify-center">
      <div className="flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="w-full border border-gray-300 rounded-md pl-4 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-500"
          placeholder="Search for a GitHub user..."
        />
        <button
          type="submit"
          className="bg-red-600 items-center text-white px-4 py-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </div>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result, id) => (
              <li key={id}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}

export default SearchForm;
