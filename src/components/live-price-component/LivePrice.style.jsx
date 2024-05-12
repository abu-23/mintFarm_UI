import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  margin: 0;
  position: relative;
`;

export const BannerImage = styled.img`
  width: 100%;
`;

export const Text = styled.div`
  position: absolute;
  top: 10%;
  left: 40%;
  background: none;
  color: white;
    @media (max-width:900px){
    left:30%;
    top:6%;
  }
  @media (max-width:600px){
    left:30%;
    top:2%;
    font-size:11px;
  }
`;

export const PriceDetails = styled.div`
  display: flex;
  margin-top:2rem;
    @media (max-width:600px){
    margin-top:1rem;
  }
`;

export const PriceDiv = styled.div`
  background: #17354d;
  margin: 1rem;
  padding: 2rem 3rem;
  border-radius:10px;
  
  @media (max-width:600px){
    padding:1rem;
  }
`;
export const Price = styled.div`
  background: ${(props) => props.theme.colors.grey_background};
  padding: 0.5rem;
  margin: 0.5rem;
`;
export const PricePercent = styled.span`
  color: #00cd5e;
  margin-left: 0.3rem;
`;

export const PriceText = styled.div`
  text-align: center;
  font-weight:700;
`;

export const PriceDiv2 = styled(PriceDiv)`
  padding: 0.5rem;
  text-align:center;
  font-weight:700;

`;