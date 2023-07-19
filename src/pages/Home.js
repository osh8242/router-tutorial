import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <Link to="/About">소개</Link> | <a href="/About">소개</a>
      <p>
        쿼리스트링 예제 : <Link to="/About?detail=true&mode=1">소개</Link>
      </p>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/anonymous">없는 사용자</Link>
        </li>
        <li>
          <Link to="/articles">게시글</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
