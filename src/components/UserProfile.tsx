import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

    const fetchData = async () => {
      if (!username) {
        navigate("/");
      } else {
        await fetchUserProfile();
      }
    };

    fetchData();
  }, [username, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto bg-black rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover object-center max-w-full"
        src={user.avatar_url}
        alt={user.login}
      />
      <div className="p-4 text-white text-center">
        <h2 className="text-[#FFD700] text-xl font-bold mb-2">{user.login}</h2>
        <p className="text-slate-400">{user.bio}</p>
        <p className="mt-4">Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>Public Repos: {user.public_repos}</p>
      </div>
    </div>
  );
}

export default UserProfile;
