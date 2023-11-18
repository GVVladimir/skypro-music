import { useParams } from "react-router-dom";
import * as S from "../../App.Styles";

export const Category = () => {
    const params = useParams()
    const masCategory = [
        {id: 1,
        tatle: 'Плей лист дня'},
        
        {id: 2,
        tatle: '100 танцевальных хитов'},
    
        {id: 3,
        tatle: 'Инди-заряд'},
    ]
const category = masCategory.find((el) => 
    el.id === Number(params.id) 
) 

    return (
     <S.Wrapper>
        <S.Container>
      <div>
        <h1>{category.tatle}</h1>
      </div>
      </S.Container>
      </S.Wrapper>
      
    );
  };
  