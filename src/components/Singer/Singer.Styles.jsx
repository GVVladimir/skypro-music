import { styled } from "styled-components";

export const SingerText = styled.ul`
position: absolute;
width: 208px;
height: 205px;
border-radius: 12px;
padding: 14px;
background-color: #313131;
margin-top: 10px;
overflow: hidden;
overflow-y: auto;
direction: ltr;
scrollbar-color: #433c4f #e4e4e4;
scrollbar-width: thin;
&::-webkit-scrollbar {
  width: 6px;
}
&::-webkit-scrollbar-track {
  background-color: #242324;
  border-radius: 100px;
}
&::-webkit-scrollbar-thumb {
  background-color: #757478;
  border-radius: 100px;
}
`

export const SingerTextSinger = styled.li`
width: 113px;
height: 24px;
font-size: 14px;
color: #ffffff;
font-family: "StratosSkyeng";
margin-top: 7px;
&:hover{
  color: #b672ff;
  text-decoration: underline;
  cursor: pointer;
}
`