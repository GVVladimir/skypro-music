import React, { useEffect, useState } from "react";
import SkeletonImg from "../SkeletonBurger/SkeletonBurger";


import * as S from "./Sidebar.styles";

function Sidebar() {
  const [isloadin, setIsLoadin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoadin(false);
    }, 5000);
  }, []);
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.MainSidebarName>Sergey.Ivanov</S.MainSidebarName>
        <S.MainSidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.MainSidebarIcon>
      </S.SidebarPersonal>
      <S.MainSidebarDlock>
        <S.MainSidebarList>
          {isloadin ? (
            <SkeletonImg />
          ) : (
            <S.SidebarItem>
              <S.SidebarLink to="/category/1">
                <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
          )}
          {isloadin ? (
            <SkeletonImg />
          ) : (
            <S.SidebarItem>
              <S.SidebarLink to="/category/2">
                <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
          )}
          {isloadin ? (
            <SkeletonImg />
          ) : (
            <S.SidebarItem>
              <S.SidebarLink to="/category/3">
                <S.SidebarImg src="img/playlist03.png" alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
          )}
        </S.MainSidebarList>
      </S.MainSidebarDlock>
    </S.MainSidebar>
  );
}
export default Sidebar;
