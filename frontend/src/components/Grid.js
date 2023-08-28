import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 0px #ccc;
  border-radius: 5px;
  max-width: 800px;
  margin: 20px auto;
  word-break: break-all;
`;

const Thead = styled.thead``;

const Tr = styled.tr``;

const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Tbody = styled.tbody``;

const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ users }) => {
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>E-mail</Th>
            <Th onlyWeb>Fone</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((item, i) => (
            <Tr key={i}>
              <Td width="30%">{item.nome}</Td>
              <Td width="30%">{item.email}</Td>
              <Td width="20%" onlyWeb>
                {item.fone}
              </Td>
              <Td alignCenter width="5%">
                <FaEdit />
              </Td>
              <Td alignCenter width="5%">
                <FaTrash />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default Grid;