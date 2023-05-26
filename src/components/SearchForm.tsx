import { useState, FormEvent } from "react";

interface SearchFormProps {
  handleSearch: (query: string) => void;
}

function SearchForm({ handleSearch }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex justify-center">
      <div className="flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
    </form>
  );
}

export default SearchForm;
