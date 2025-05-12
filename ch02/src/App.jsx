import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Fragment } from "react";
import "./App.scss";
import styled from "styled-components";

// 스타일 컴포넌트 정의
const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background-color: blue;
  color: white;
`;

// App 컴포넌트
function App() {
  let num1 = 1;
  let num2 = 2;

  const title = "Hello React!";
  const name = null;
  const isValue = false;

  const resultContent = function () {
    if (isValue) {
      return <p>true 입니다.</p>;
    } else {
      return <p>false 입니다.</p>;
    }
  };

  const cities = ["서울", "대전", "대구", "부산", "광주"];
  const users = [
    { uid: "a101", name: "김유신", age: 23, addr: "김해" },
    { uid: "a102", name: "김춘추", age: 21, addr: "경주" },
    { uid: "a103", name: "장보고", age: 33, addr: "완도" },
    { uid: "a104", name: "강감찬", age: 43, addr: "서울" },
    { uid: "a105", name: "이순신", age: 53, addr: "부산" },
  ];

  // JSX 이벤트
  const clickHandler = function () {
    alert("버튼2 클릭!");
  };
  // 증가 이벤트
  let count = 0;

  const increase = function () {
    const resultCount = document.getElementsByClassName("count")[0];
    resultCount.innerText = ++count;
  };
  const decrease = function () {
    const resultCount = document.getElementsByClassName("count")[0];
    resultCount.innerText = --count;
  };
  //변경 이벤트
  const selectHandler = (e) => {
    console.log(`name : ${e.target.name}, value : ${e.target.value}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const jsonData = {
      uid: e.target.uid.value,
      name: e.target.name.value,
      age: e.target.age.value,
    };
    console.log(
      `uid : ${jsonData.uid}, name : ${jsonData.name}, age : ${jsonData.age}`
    );
  };
  return (
    <div className="App">
      <h3>2장 React JSX 실습</h3>

      <h4>변수 출력</h4>
      <p>num1 : {num1}</p>
      <p>num1 : {num2}</p>
      <p>num1 : {title}</p>
      <p>num1 : {name}</p>

      <h4>조건부 연산자</h4>
      <p>
        {num1 > num2 ? (
          <span>num1은 num2보다 크다.</span>
        ) : (
          <span>num1은 num2보다 작다.</span>
        )}
      </p>
      <p>{name == null && <span>name은 null 입니다.</span>}</p>
      <p>{name || <span>name은 null 입니다.</span>}</p>

      {isValue ? <p>true 입니다.</p> : <p>false 입니다.</p>}
      {resultContent()}

      <h4>반복 연산자</h4>
      <ul>
        {cities.map((city, index) => (
          <li className="city" key={index} children={city}>
            {city}
          </li>
        ))}
      </ul>

      {users.map((users) => (
        <p className="users" key={users.uid}>
          {users.uid}, {users.name}, {users.age}, {users.addr}
        </p>
      ))}

      <h4>JSX Fragment</h4>
      {/* JSX 태그 요소를 감싸는 가상 태그, 렌더링 X, 간단하게 <></> 사용 */}
      <Fragment>
        <p>안녕하세요.</p>
        <p>반갑습니다.</p>
      </Fragment>

      <>
        <p>안녕하세요.</p>
        <p>반갑습니다.</p>
      </>

      <h4>이벤트</h4>

      <button
        onClick={() => {
          alert("버튼1 클릭!");
        }}
      >
        버튼1
      </button>
      <button onClick={clickHandler}>버튼2</button>

      <p>
        count : <span className="count">0</span>
        <br />
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </p>

      <select onChange={selectHandler} name="city">
        <option>서울</option>
        <option>대전</option>
        <option>대구</option>
        <option>부산</option>
        <option>광주</option>
      </select>

      <form onSubmit={submitHandler}>
        <input type="text" name="uid" />
        <br />
        <input type="text" name="name" />
        <br />
        <input type="number" name="age" />
        <br />
        <input type="submit" name="전송" />
        <br />
      </form>

      <h4>JSX 스타일</h4>

      {/* 인라인 */}
      <div
        style={{
          display: "inline-block",
          width: "100px",
          height: "100px",
          border: "1px solid black",
          background: "orange",
        }}
      >
        box
      </div>

      {/* scss 스타일 */}
      <div className="box">box</div>

      {/* style-component */}
      <StyledDiv>box</StyledDiv>

      {/* tailwind */}
    </div>
  );
}

export default App;
