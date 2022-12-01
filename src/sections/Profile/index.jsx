

const Profile = () => (
  <div className="flex flex-col items-center gap-3">
    <div className="avatar">
      <div className="w-[124px] rounded-full ring -offset-base-100 ring-offset-2">
        <img
          src=""
          alt=""
          className="object-cover object-center"
        />
      </div>
    </div>
    <h1 className="text-3xl font-bold text-center mt-2 lowercase ">Deo Subarno</h1>
    <p className="text-lg font-medium text-center capitalize">cs student </p>
  </div>
);

export default Profile;
