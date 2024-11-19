import * as React from "react"

const Header = ({ siteTitle }) => (
  <div className="z-[110] top-0 fixed p-3 w-full text-center">
    <h1 className="text-4xl text-center lg:text-5xl font-extrabold uppercase">
      {siteTitle}
    </h1>
  </div>
)

export default Header
