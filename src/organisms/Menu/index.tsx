import * as S from "./styles";


const Menu = () => {
    return <S.MenuList>
        <S.ItemList><a href="#">Início</a></S.ItemList>
        <S.ItemList>Sobre Nós</S.ItemList>
        <S.ItemList>Como doar?</S.ItemList>
        <S.ItemList>Serviços</S.ItemList>
        <S.ItemList>Contato</S.ItemList>
    </S.MenuList>;
};

export default Menu;