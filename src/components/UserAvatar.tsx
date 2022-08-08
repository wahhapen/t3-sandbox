interface IProps {
  user: {
    image?: string | null;
    name?: string | null;
  };
}

export const UserAvatar: React.FC<IProps> = ({ user }) => {
  return (
    <div className="flex flex-row items-center gap-3">
      {user.image && (
        <div className="w-12 aspect-square rounded-lg">
          <img className="m-0 rounded-lg" src={user.image} />
        </div>
      )}
      <span>{user.name}</span>
    </div>
  );
};
