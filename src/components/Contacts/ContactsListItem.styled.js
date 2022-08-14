import styled from '@emotion/styled'

export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.sm};
  border-left: ${props => props.theme.borders.decorBold};
  border-right: ${props => props.theme.borders.decorBold};
  border-color: ${props => props.theme.colors.secondary};

  box-shadow: ${props => props.theme.shadows.box};
  font-size: ${props => props.theme.fontSizes[3]}px;

  transition: 0.3s all linear;

  &:hover {
    background-color: ${props => props.theme.colors.backgroundHover};
  }
`