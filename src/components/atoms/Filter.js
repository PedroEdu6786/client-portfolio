import styled from '@emotion/styled'

export const Filter = styled.span`
  position: absolute;
  width: 200px;
  height: 200px;
  mix-blend-mode: hue;
  background: blue;
  top: ${(props) => props.top && props.top};
  right: ${(props) => props.right && props.right};
  bottom: ${(props) => props.bottom && props.bottom};
  left: ${(props) => props.left && props.left};
  z-index: 0;
`
