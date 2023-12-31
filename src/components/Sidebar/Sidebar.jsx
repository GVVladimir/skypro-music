import React, { useContext} from "react";
import SkeletonImg from "../SkeletonBurger/SkeletonBurger";

import * as S from "./Sidebar.styles";
import { AuthContext } from "../../Stor/AutnContext";

function Sidebar({ isLoading }) {
  const { user, AuthLogaut } = useContext(AuthContext);

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.MainSidebarName>{user.username}</S.MainSidebarName>
        <S.MainSidebarIcon>
          <svg alt="logout" onClick={AuthLogaut}>
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.MainSidebarIcon>
      </S.SidebarPersonal>
      <S.MainSidebarDlock>
        <S.MainSidebarList>
          {isLoading ? (
            <SkeletonImg />
          ) : (
            <S.SidebarItem>
              <S.SidebarLink to="/category/1">
                <S.SidebarImg src="img/playlist01.png" alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
          )}
          {isLoading ? (
            <SkeletonImg />
          ) : (
            <S.SidebarItem>
              <S.SidebarLink to="/category/2">
                <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
              </S.SidebarLink>
            </S.SidebarItem>
          )}
          {isLoading ? (
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
