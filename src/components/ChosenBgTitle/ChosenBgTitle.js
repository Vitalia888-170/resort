import styled from 'styled-components';

const StyledBgTitle = styled.header`
  min-height: 80vh;
  background: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform:capitalize;
  letter-spacing:3px;
`
export default StyledBgTitle;
