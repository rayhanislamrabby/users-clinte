import { NavLink, useLoaderData } from "react-router-dom";
import UsersCard from "../Components/UsersCard";
import { useState } from "react";

const MainLayout = () => {
  const users = useLoaderData();

  const [userr, setUserr] = useState(users);

  return (
    <div>

<div>
  <NavLink className='btn' to={'/newusers'}>New Users </NavLink>
</div>




<div>
        hello main users : {userr.length}
      {userr.map((user, index) => (
        <UsersCard
          key={user._id}
          user={user}
          index={index}
          userr={userr}
          setUserr={setUserr}
        ></UsersCard>
      ))}
</div>



    </div>
  );
};

export default MainLayout;
