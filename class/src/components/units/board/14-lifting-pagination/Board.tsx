import styled from "@emotion/styled";

const MyRow = styled.div`
  display: flex;
  // justify-contents: space-between;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function Board(props) {
  return (
    <div>
      {props.data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
