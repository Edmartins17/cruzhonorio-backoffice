import styled from 'styled-components';

const OptionsHeaderContainer = styled.ul``
const OptionsItemsLI = styled.li``

const optionsList = ['ALUNOS','TURMAS','PROFESSORES']

function OptionsHeader(){
    return(
        <OptionsHeaderContainer>
            {
                optionsList.map((optionItem) => {
                    <OptionsItemsLI>{optionItem}</OptionsItemsLI>
                })
            }
        </OptionsHeaderContainer>
    )
}

export default OptionsHeader