"use client";

export default function UserActions() {

  function exportUser() {
    alert("User exported.");
  }

  function suspendUser() {
    alert("User suspended.");
  }

  function activateUser() {
    alert("User activated.");
  }

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-blue-700">

        Quick Actions

      </h2>

      <p className="text-gray-500 mt-2">

        Perform administrative actions for this user.

      </p>

      <div className="grid md:grid-cols-3 gap-5 mt-8">

        <button
          onClick={exportUser}
          className="bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold"
        >
          Export User
        </button>

        <button
          onClick={suspendUser}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-xl font-semibold"
        >
          Suspend User
        </button>

        <button
          onClick={activateUser}
          className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold"
        >
          Activate User
        </button>

      </div>

    </div>

  );

}