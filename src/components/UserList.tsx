import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

interface User {
  id: number;
  avatar_url: string;
  login: string;
  bio: string;
}

interface UserListProps {
  searchQuery: string;
}

function UserList({ searchQuery }: UserListProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${searchQuery}`
        );
        setUsers(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchQuery) {
      fetchUsers();
    }
  }, [searchQuery]);

  return (
    <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;