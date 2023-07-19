import React from "react";
import { useParams } from "react-router-dom";

const data = {
  velopert: {
    name: "김민준",
    desc: "리액트를 좋아하는 개발자",
    age: 20,
  },
  gildong: {
    name: "홍길동",
    desc: "고전 소설 홍길동전의 주인공",
    age: 66,
  },
};

const Profile = () => {
  const params = useParams();
  const userInfo = data[params.userid];

  return (
    <div>
      <h1>사용자 프로파일</h1>
      {userInfo ? (
        <div>
          <h2>{userInfo.name}</h2>
          <p>{userInfo.desc}</p>
          <p>{userInfo.age}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
