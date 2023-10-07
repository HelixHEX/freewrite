import Image from "next/image";
import FormatDate from "./formatDate";

const PostCard: React.FC<Post> = ({ user, content, createdAt }) => {
  return (
    <div className="mt-8">
      <div className="flex">
        <Image
          alt="User profile image"
          className="rounded-full"
          src={user?.profileImage!}
          width={40}
          height={40}
        />
        <div className="px-2 items-center">
          <div className="flex">
            <h2 className="text-xs text-gray-400 font-bold tracking-tight">
              @{user?.username}
            </h2>
            <div className="w-2 h-2 self-center rounded-full bg-slate-300 mr-2 ml-2" />
            <FormatDate date={createdAt!} />
          </div>
          <h2 className="text-l font-bold tracking-medium">{`${user?.firstName} ${user?.lastName}`}</h2>
        </div>
      </div>
      <h1 className="mt-2">{content}</h1>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      {/* <hr className='h-4 my-10 border-t-0 bg-red opacity-100 dark:opacity-50"' /> */}
    </div>
  );
};

export default PostCard;
