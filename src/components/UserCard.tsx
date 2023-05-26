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
    <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto bg-black rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover object-center max-w-full"
        src={user.avatar_url}
        alt={user.login}
      />
      <div className="p-2 sm:p-4 my-2 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-[#FFD700] text-lg font-bold mb-2 sm:mb-0 sm:mr-2 overflow-hidden">
          <span className="inline-block overflow-hidden max-w-full whitespace-nowrap overflow-ellipsis">
            {user.login}
          </span>
        </h2>
        <Link
          to={`/user/${user.login}`}
          className="inline-block bg-red-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-red-400"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
