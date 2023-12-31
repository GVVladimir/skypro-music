import { styled } from "styled-components";

export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
  gap: 10px;
`;
export const CenterblockFilterTitel = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15p;
`;

export const CenterblockFilterButton = styled.button`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  color:#ffffff;
  background-color:#000000;
  border-radius: 60px;
  padding: 6px 20px;
  &:focus {
    color: #b672ff;
    cursor: pointer;
    border: 1px solid #b672ff;
  } 
  &:hover {
    color: #b672ff;
    cursor: pointer;
    border: 1px solid #b672ff;
  } 
  
`;
