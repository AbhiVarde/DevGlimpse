import { Link } from "react-router-dom";

interface UserCardProps {
  user: {
    id: number;
    avatar_url: string;
    login: string;
  };
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-black rounded-lg shadow-md overflow-hidden">
      <img className="w-full" src={user.avatar_url} alt={user.login} />
      <div className="p-4 my-2 flex justify-between items-center">
        <h2 className=" text-[#FFD700] text-xl font-bold mb-2">{user.login}</h2>
        <Link
          to={`/user/${user.login}`}
          className="inline-block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-400"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
