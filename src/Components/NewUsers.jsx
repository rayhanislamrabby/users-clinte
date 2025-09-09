import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const NewUsers = () => {
  const handelSubmitForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;
    const newUsers = { name, email, gender, status };

    console.log(newUsers);

    fetch("http://localhost:5000/newusers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUsers),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Users Add Success!",
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
          <h1 className="text-5xl font-bold">Add New User </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <NavLink className="btn" to={"/"}>
            Home{" "}
          </NavLink>
          <div className="card-body">
            <fieldset className="fieldset">
              <form onSubmit={handelSubmitForm}>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Name"
                   required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  required
                />

                <label className="label">Gender</label>
                <input
                  type="text"
                  className="input"
                  name="gender"
                  placeholder="Gender"
                   required
                />

                <label className="label">Status</label>
                <input
                  type="text"
                  className="input"
                  name="status"
                  placeholder="Status"
                   required
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

export default NewUsers;
