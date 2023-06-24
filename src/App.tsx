import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import UserProfile from "./components/UserProfile";
import UserList from "./components/UserList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const currentYear = new Date().getFullYear();
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-Nunito">
        <header className="bg-[#153289] py-6">
          <h2 className="text-[#FFD700] text-3xl flex justify-center items-center font-bold">
            <img
              src="/logo.png"
              className="h-8 inline-block align-middle mr-2"
              alt="logo"
            />
            DEV Glimpse
          </h2>
          <p className="text-white text-center mt-2">
            Find GitHub users and explore their profiles.
          </p>
          <SearchForm handleSearch={handleSearch} />
        </header>
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 flex-grow">
          <Routes>
            <Route path="/" element={<UserList searchQuery={searchQuery} />} />
            <Route path="/user/:username" element={<UserProfile />} />
          </Routes>
        </div>
        <footer className="bg-[#153289] text-center text-white py-4">
          © {currentYear} AbhiVarde - Made with ❤️ for the people of the
          internet.
        </footer>
      </div>
    </Router>
  );
}

export default App;
