import * as S from "./styles";
import Logo from '../../molecules/Logo'
import Menu from "../Menu";
import Button from "../../atoms/Button";
import Navbar from "../Menu";



const Header = () => {
    return(
    <S.Box>
        <Logo />
        <Navbar/>
        <Button />
    </S.Box>

    );
};

export default Header;