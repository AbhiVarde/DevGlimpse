import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface User {
  id: number;
  avatar_url: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

interface UserProfileParams {
  username: string;
  [key: string]: string | undefined;
}

function UserProfile() {
  const params = useParams<UserProfileParams>();
  const { username } = params;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserProfile();
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-black rounded-lg shadow-md overflow-hidden">
      <img className="w-full" src={user.avatar_url} alt={user.login} />
      <div className="p-6 text-white text-center">
        <h2 className="text-[#FFD700] text-2xl font-bold mb-2">{user.login}</h2>
        <p className="text-slate-400">{user.bio}</p>
        <p className="mt-4">Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Public Repos: {user.public_repos}</p>
      </div>
    </div>
  );
}

export default UserProfile;
