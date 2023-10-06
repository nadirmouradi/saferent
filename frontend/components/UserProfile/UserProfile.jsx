import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import emptyPic from "../../public/assets/emptypic.png";

import { Link } from 'next/link';


const UserProfile = ({ user }) => {
  const router = useRouter();

  return (
      <div className="p-10">
      <button
        onClick={() => router.back()}
        className=" text-black rounded-l-md border-r border-gray-100 py-2 hover:bg-[#f06d63] hover:text-white px-3 mb-5"
      >
        <div className="flex flex-row align-middle">
          <svg
            className="w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p className="ml-2">Back</p>
        </div>
      </button>

      <div className="container mx-auto my-5 ml-10  ">
        <div className="md:flex no-wrap md:-mx-2  ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-[#f06d63]">
              <div className="mt-7">
                <img
                  className="h-[50%]  w-[50%] ml-[25%] rounded-full"
                  src={user?.pic ? user?.pic : emptyPic}
                  alt=""
                />
              </div>
              <h1 className="text-gray-900 text-center font-bold text-xl leading-8 my-1 mt-7">
                {user?.firstNameUser} {user?.lastNameUser}
              </h1>

              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 divide-y rounded shadow-sm mt-7">
                <li className="flex items-center py-3">
                  <span>account renter</span>
                  <span className="ml-auto">
                    <button  className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                    <Link href="/requestaccountrenter">
                      Active
                    </Link>
                    </button>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>created at</span>
                  <span className="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
            </div>
            <div className="my-4"></div>
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64 ml-20 ">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-4">
                <span className="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide  ">About</span>
              </div>
              <div className="text-gray-700 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">First name</div>
                  <div className="grid grid-cols-2 items-center">
                    {/* {isEditMode ? (
                      <input
                      type="text"
                      name="name"
                      value={user.firstNameUser}
                      onChange={handleInputChange}
                      classNameName="border border-gray-300 p-2 rounded-md"
                      />
                      ) : (
                        <span>{user.firstNameUser}</span>
                        )}
                    {isEditMode && (
                      <button
                      onClick={handleUpdateClick}
                      classNameName="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                      >
                        Update
                      </button>
                    )} */}
                    <FontAwesomeIcon  icon={faEdit}/>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Last name</div>
                  <div className="grid grid-cols-2 items-center ">
            <FontAwesomeIcon  icon={faEdit}/>

                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email</div>

                  <div className="grid grid-cols-2 items-center ">
                  <FontAwesomeIcon  icon={faEdit}/>

                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">password</div>
                  <div className="grid grid-cols-2 items-center">
                    <div className="px-4 py-2 ">***********</div>
                    <FontAwesomeIcon color="black" icon={faEdit} />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Role</div>
                  <div className="flex items-center">
                    <div className="px-4 py-2 ">
                      {user?.role == 0 ? "Client" : "Admin"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
