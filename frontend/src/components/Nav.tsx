import React from "react";

function Nav () {
  return (
    <nav className="flex justify-end mx-20 mt-6 text-white italic font-libre text-2xl">
        <ul>
            <a href="/about"><li className="hover:text-indigo-200 cursor-pointer">☆ About ☆</li></a>
        </ul>
    </nav>
  )
}

export default Nav;