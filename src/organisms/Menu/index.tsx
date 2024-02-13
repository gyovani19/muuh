import * as S from "./styles";


const Menu = () => {
    return <S.MenuList>
        <S.ItemList><a href="#">Início</a></S.ItemList>
        <S.ItemList><a href="#">Sobre Nós</a></S.ItemList>
        <S.ItemList><a href="#">Como doar?</a></S.ItemList>
        <S.ItemList><a href="#">Serviços</a></S.ItemList>
        <S.ItemList><a href="#">Contato</a></S.ItemList>
    </S.MenuList>;
};

export default Menu;