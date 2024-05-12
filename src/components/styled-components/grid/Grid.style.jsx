import styled from 'styled-components';

const colWidth = {
  12: (100 / 12) * 12,
  11.5: (100 / 12) * 11.5,
  11: (100 / 12) * 11,
  10.5: (100 / 12) * 10.5,
  10: (100 / 12) * 10,
  9.5: (100 / 12) * 9.5,
  9: (100 / 12) * 9,
  8.5: (100 / 12) * 8.5,
  8: (100 / 12) * 8,
  7.5: (100 / 12) * 7.5,
  7: (100 / 12) * 7,
  6.5: (100 / 12) * 6.5,
  6: (100 / 12) * 6,
  5.5: (100 / 12) * 5.5,
  5: (100 / 12) * 5,
  4.5: (100 / 12) * 4.5,
  4: (100 / 12) * 4,
  3.5: (100 / 12) * 3.5,
  3: (100 / 12) * 3,
  2.5: (100 / 12) * 2.5,
  2.4: (100 / 12) * 2.4,
  2: (100 / 12) * 2,
  1.5: (100 / 12) * 1.5,
  1: (100 / 12) * 1,
  0.5: (100 / 12) * 0.5,
};

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  height: ${(props) => props.height};
  flex-wrap: wrap;
  position: relative;
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  border: ${(props) => `${props.border}` || 'none'};
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  background-color: ${(props) => props.backgroundColor};
`;

export const Col = styled.div`
  width: ${(props) => (props.width ? props.width : `${colWidth[props.col]}%` || '100%')};
  text-align: ${(props) => props.textAlign};
  flex-grow: ${(props) => props.flexGrow};
  position: relative;
  position: ${(props) => props.position || 'relative'};
  z-index: ${(props) => props.zIndex || 'none'};
  box-sizing: border-box;
  background: ${(props) => props.background};
  display: ${(props) => props.display};
  place-content: ${(props) => props.placeContent};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin: ${(props) => props.margin};
  align-self: ${(props) => props.alignSelf};
  border-radius: ${(props) => props.borderRadius};
  height: ${(props) => props.height};
  justify-content: ${(props) => props.justifyContent};
  background-color: ${(props) => props.backgroundColor};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  padding: ${(props) => props.padding};
  padding-right: ${(props) => props.paddingRight};
  padding-left: ${(props) => props.paddingLeft};
  border-radius: ${(props) => props.borderRadius};
`;
