import styled from "styled-components";

export const StyledSuggestedPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  & > article {
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  }
  & > article img {
    max-width: 100%;
  }
  .text {
    padding: 0 20px 20px;
  }
`;
