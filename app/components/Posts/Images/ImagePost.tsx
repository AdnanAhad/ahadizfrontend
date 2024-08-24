import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/app/AuthContext/AuthContext";

function ImagePost(props: any) {
  const { user } = props;

  // sm	640px	@media (min-width: 640px) { ... }
  // md	768px	@media (min-width: 768px) { ... }
  // lg	1024px	@media (min-width: 1024px) { ... }
  // xl	1280px	@media (min-width: 1280px) { ... }
  // 2xl	1536px	@media (min-width: 1536px) { ... }

  return (
    // <div className="h-screen w-full bg-white dark:bg-slate-800 border rounded-lg ">
    <div className="h-[800px] w-[500px] bg-white dark:bg-fbDark-post rounded-lg ">
      {/* head */}
      <div className="flex flex-row items-center gap-3 p-3">
        <div className="relative w-10 h-10 rounded-full bg-white">
          <Image
            src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Flowbite Logo"
            layout="fill"
            className="h-10 rounded-full"
            objectFit="cover"
          />
        </div>
        <div className="text-black dark:text-white">{`${user.firstName} ${user.lastName}`}</div>
        <div className="ml-auto dark:text-white">
          <button>
            <svg
              className="w-[30px] h-[30px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M12 6h.01M12 12h.01M12 18h.01"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="h-3/4 relative  mt-4 rounded-lg bg-black">
        <Image
          className="rounded-lg"
          src="https://images.pexels.com/photos/26059002/pexels-photo-26059002/free-photo-of-waterbuck-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Flowbite Logo"
          layout="fill"
          objectFit="cover"
        />
        <span className="text-gray-300 absolute bottom-4 p-3 overflow-hide">
          If you don't want to customize Tailwind’s config, you can always use
          plain CSS media queries alongside Tailwind classes to target very
          specific devices.
        </span>
      </div>

      <div className="flex flex-row justify-between p-3">
        <button>
          <div>
            <svg
              className="w-[30px] h-[30px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>
          </div>
        </button>
        {/* <button>
          <div>
            <svg
              className="w-[30px] h-[30px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </button> */}
        <button>
          <div>
            <svg
              className="w-[30px] h-[30px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M14.516 6.743c-.41-.368-.443-1-.077-1.41a.99.99 0 0 1 1.405-.078l5.487 4.948.007.006A2.047 2.047 0 0 1 22 11.721a2.06 2.06 0 0 1-.662 1.51l-5.584 5.09a.99.99 0 0 1-1.404-.07 1.003 1.003 0 0 1 .068-1.412l5.578-5.082a.05.05 0 0 0 .015-.036.051.051 0 0 0-.015-.036l-5.48-4.942Zm-6.543 9.199v-.42a4.168 4.168 0 0 0-2.715 2.415c-.154.382-.44.695-.806.88a1.683 1.683 0 0 1-2.167-.571 1.705 1.705 0 0 1-.279-1.092V15.88c0-3.77 2.526-7.039 5.967-7.573V7.57a1.957 1.957 0 0 1 .993-1.838 1.931 1.931 0 0 1 2.153.184l5.08 4.248a.646.646 0 0 1 .012.011l.011.01a2.098 2.098 0 0 1 .703 1.57 2.108 2.108 0 0 1-.726 1.59l-5.08 4.25a1.933 1.933 0 0 1-2.929-.614 1.957 1.957 0 0 1-.217-1.04Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default ImagePost;
