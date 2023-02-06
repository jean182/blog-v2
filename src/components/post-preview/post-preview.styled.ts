import styled from "styled-components";  

export const StyledPostPreview = styled.div`
  display: flex;
  justify-content: space-between;

  .post-meta, .post-preview {
    padding: 0.5rem;
  }

  .post-meta {
    flex-grow: 0;

    p {
      margin: 0;
    }
  }

  .post-preview {
    flex-grow: 1;
    margin: auto;
  }

  h2 {
    font-weight: 800;
    line-height: 1.09;
    font-size: 1.625rem;
    letter-spacing: -.7px;
    color: #000;
  }
`;
