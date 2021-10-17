import styled from "styled-components";

const Container = styled.div`
  height: 194px;
  /* TODO: look for a better way to acheive this (This box-shadow config will be repeated in many components) */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px 25px 17px 25px;
`;

const InputText = styled.input`
  background-color: whitesmoke;
  border: none;
  height: 33px;
  padding-left: 11px;

  font-family: Avenir;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 10px;

  border-radius: 4px;
`;

const TextArea = styled(InputText)`
  height: 68px;
  padding-top: 10px;
`;

const PriorityButton = styled.button`
  width: 140px;
  height: 36px;
  border-radius: 4px;
  font-family: "Lato";
  font-size: 14px;
  cursor: pointer;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  /* line-height: 19px; */
  background-color: white;
  color: grey;
  border-color: white;
`;

const AddButton = styled(PriorityButton)`
  color: white;
  background: #eb514e;
  border-color: #eb514e;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center;
  align-content: center; */
  /* margin-top: auto;
  margin-bottom: auto; */
`;

const NewTodoContainer = () => {
  return (
    <Container>
      <InputText placeholder="Titre" />
      <TextArea placeholder="Description" as="textarea" />
      <ButtonsContainer>
        <PriorityButton>Priorité</PriorityButton>
        <AddButton>Ajouter</AddButton>
      </ButtonsContainer>
    </Container>
  );
};

export default NewTodoContainer;
