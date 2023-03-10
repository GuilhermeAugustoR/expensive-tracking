import styled, { css } from "styled-components/native";

export const StyledButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    align-self: center;
    justify-content: center;
    border-radius: 12%;
    height: 55px;
    width: 70%;
    :disabled {
      background-color: #747e85;
    }
  `}
`;

export const ContainerButton = styled.View`
  display: flex;
  width: 300px;
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    align-self: center;
    color: ${theme.colors.textColorWhite};
  `}
`;
