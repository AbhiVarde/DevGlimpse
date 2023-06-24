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
    <div className="flex justify-center items-center px-4">
      <div className="bg-black rounded-lg shadow-md overflow-hidden max-w-sm w-full">
        <img
          className="w-full h-64 object-cover object-center"
          src={user.avatar_url}
          alt={user.login}
        />
        <div className="p-4 text-white text-center">
          <h2 className="text-[#FFD700] text-xl font-bold mb-2">
            {user.login}
          </h2>
          <p className="text-slate-400">{user.bio}</p>
          <div className="flex justify-center mt-4">
            <div className="w-1/3">
              <p className="text-[#FFD700] font-bold">Followers</p>
              <p>{user.followers}</p>
            </div>
            <div className="w-1/3">
              <p className="text-[#FFD700] font-bold">Following</p>
              <p>{user.following}</p>
            </div>
            <div className="w-1/3">
              <p className="text-[#FFD700] font-bold">Public Repos</p>
              <p>{user.public_repos}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
