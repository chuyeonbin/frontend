import styled from 'styled-components';

export const ProfileModal = styled.ul`
  position: absolute;
  left: -130px;
  display: ${props => {
    console.log(props.toggle);
    return props.toggle ? 'flex' : 'none';
  }};
  flex-direction: column;
  width: 190px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  background-color: white;
  border-radius: 22px;
  z-index: 1;
`;

export const ProfileList = styled.li`
  margin: 1.2rem 0;
  cursor: pointer;
`;
