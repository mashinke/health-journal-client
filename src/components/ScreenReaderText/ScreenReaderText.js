import styled from 'styled-components';

const ScreenReaderText = styled.span`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap; /* added line */
border: 0;
`;

export default ScreenReaderText;
