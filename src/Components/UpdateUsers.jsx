import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUsers = () => {

const loadedUser = useLoaderData()
  const handelUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;
    const updateUsers = { name, email, gender, status };

    console.log(updateUsers);

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUsers),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Success!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update User </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <form onSubmit={handelUpdate}>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  defaultValue={loadedUser?.name}
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  defaultValue={loadedUser?.email}
                  name="email"
                  placeholder="Email"
                />

                <label className="label">Gender</label>
                <input
                  type="text"
                  defaultValue={loadedUser?.gender}
                  className="input"
                  name="gender"
                  placeholder="Gender"
                />

                <label className="label">Status</label>
                <input
                  type="text"
                  defaultValue={loadedUser?.status}
                  className="input"
                  name="status"
                  placeholder="Status"
                />

                <button className="btn btn-neutral  mt-4">Save </button>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUsers;
