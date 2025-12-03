import styled from "styled-components";

export const ReceitasContainer = styled.div`
  width: 92%;
  max-width: 1100px;
  margin: 40px auto;
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const TopBar = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .searchGroup {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`;

export const CreateForm = styled.form`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;

  input, textarea {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #e3c4a3;
    outline: none;
    font-size: 14px;
  }

  textarea {
    min-width: 320px;
    min-height: 80px;
    resize: vertical;
  }

  button {
    background: #f04432;
    color: white;
    padding: 10px 14px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
`;

export const List = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

export const Card = styled.div`
  background: #fff7f2;
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 6px 14px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    margin: 0;
    color: #6b3f1f;
  }

  p {
    margin: 0;
    color: #4b3a2a;
    font-size: 14px;
    min-height: 40px;
  }

  .actions {
    margin-top: auto;
    display: flex;
    gap: 8px;
    justify-content: flex-end;

    a, button {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
    }

    .delete {
      color: #fff;
      background: #ff6262;
    }

    .edit {
      background: #ffd89b;
    }

    .favorite {
      background: #ffef9c;
    }
  }
`;

export const Detail = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 6px 14px rgba(0,0,0,0.06);

  h2 { margin-top: 0; color: #6b3f1f; }

  .meta {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    color: #4b3a2a;
  }

  .ingredients, .preparo {
    margin-top: 12px;
  }
`;
