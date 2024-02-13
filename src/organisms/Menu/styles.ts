import styled from "styled-components";

export const MenuList = styled.ul`
    margin-left: auto;
`
export const StyledBurger = styled.div<{ open: boolean }>`
width: 2rem;
height: 2rem;
position: fixed;
top: 15px;
right: 20px;
z-index: 20;
display: none;

@media (max-width: 768px) {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
}
@media (min-width: 768px) {
  display: none;
}

div {
  width: 2rem;
  height: 0.25rem;
  background-color: ${({ open }) => (open ? '#ccc' : '#333')};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;

  :first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  :nth-child(2) {
    transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
}
`;

export const StyledMenu = styled.nav<{ open: boolean }>`

@media (min-width: 768px) {
  display: none;
}

display: flex;
flex-direction: column;
justify-content: center;
background: #ededed;
transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
height: 100vh;
text-align: left;
padding: 2rem;
position: absolute;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;



@media (max-width: 768px) {
  width: 100%;
}

a {
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: #0D0C1D;
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: #343078;
  }
}
`;

export const DesktopMenu = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    font-color: #1e255e;
  }
`;

export const ItemList = styled.li`
    display: inline-block;
    margin-right: 25px;
    font-weight: 500;
    color: #1e255e;
    

    &:hover{
        a{
            color: #17a4d0;
        }
    }

    a{
        color:#1e255e;
        transition: color 0.25s ease;
    }
`;