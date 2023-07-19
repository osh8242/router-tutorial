import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const goArticles = (e) => {
    navigate("/articles");
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header, 메뉴
        <br />
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 보기</button>
      </header>
      <main style={{ minHeight: "600px" }}>
        <Outlet />
      </main>
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>copy right 더존 5기</h1>
      </footer>
    </div>
  );
};

export default Layout;
