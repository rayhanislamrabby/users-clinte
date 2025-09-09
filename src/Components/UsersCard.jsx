import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const UsersCard = ({ user, index, userr, setUserr }) => {
  const { _id, name, email, gender, status } = user;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = userr.filter((u) => u._id !== _id);
              setUserr(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto rounded-box border  bg-base-100">
      <table className="table justify-center text-center items-center">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Upgrate</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th> {index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{status}</td>
            <td>
              <Link to={`/updateusers/${user._id}`}>
                <button className="btn">Edit</button>
              </Link>

              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item"
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersCard;
