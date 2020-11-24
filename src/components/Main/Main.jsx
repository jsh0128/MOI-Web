import React from "react";
import "./Main.scss";
import { ReactComponent as Option } from "../../assets/images/option.svg";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import MainProjectItem from "./MainProjectItem/MainProjectItem";

const Main = ({ setSearch }) => {
  return (
    <>
      <div className="Main">
        <div className="Main-Container">
          <div className="Main-Container-Search">
            <div className="Main-Container-Search-Bar">
              <input
                type="text"
                placeholder="무언가로 검색"
                className="Main-Container-Search-Bar-Input"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search />
            </div>
            <div className="Main-Container-Search-Select">
              <div className="Main-Container-Search-Select-Career">
                <span>분야</span>
                <Option />
              </div>
              <div className="Main-Container-Search-Select-Language">
                <span>개발 언어</span>
                <Option />
              </div>
              <div className="Main-Container-Search-Select-School">
                <span>학교</span>
                <Option />
              </div>
            </div>
          </div>
          <span className="Main-Container-Count">100개의 프로젝트</span>
          <div className="Main-Container-Projects">
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
            <MainProjectItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
