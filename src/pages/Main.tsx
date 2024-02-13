import ButtonContact from '../atoms/ButtonContact';
import Frontend from '../templates/Frontend';
import * as S from './styles';
import CowDoc from '../assets/cow-doc.png';


function Main() {
  return ( 
  
    <Frontend>
      <S.Container>
        <div>
          <h1>Muuh, </h1>
         <h1>uma rede de apoio solidária e segura.</h1>
          <h6>Somos uma rede social onde você pode contribuir com vaquinhas que custeiam cirurgias tendo a certeza de que sua contribuição será realmente utilizada para isso.</h6>
          <ButtonContact/>
        </div>

        <S.ColumnImage>
          <img src={CowDoc} alt="Ilustração de uma vaca vestida como um médico" />
        </S.ColumnImage>
      </S.Container>
    </Frontend>
    
  );
}


export default Main;
