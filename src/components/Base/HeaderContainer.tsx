import React from 'react';
import { Link } from 'gatsby';

const HeaderContainer = () => {
  return (
    <div className="container max-w-screen-xl mx-auto flex items-center bg-main text-white h-12 px-2 mt-3 rounded">
      <div className="text-black text-xl mr-10">
        <span className="text-yellow">Nuleong</span>log
      </div>
      <div>
        <Link to="/">
          <span className="p-3">홈</span>
        </Link>
        <Link to="/dev">
          <span className="p-3">개발</span>
        </Link>
        <Link to="/idea">
          <span className="p-3">생각</span>
        </Link>
      </div>
      <div />
    </div>
  );
};

export default HeaderContainer;
