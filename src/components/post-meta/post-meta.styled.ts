import styled from "styled-components";

export const StyledPostMetaWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 3rem;
  border-bottom: solid 1px rgba(242, 242, 242, 1);
`;

export const StyledPostMetaImageContainer = styled.div`
  display: flex;
  align-items: baseline;
  overflow: hidden;
  border-radius: 50%;
  img {
    vertical-align: middle;
  }
`;

export const StyledMetaContent = styled.div`
  display: block;
  width: 100%;
  margin-left: 12px;

  .meta {
    display: block;
    align-items: flex-start;
  }

  .author {
    display: flex;
    div {
      flex: 1 1 0%;
      display: inline-block;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  .date {
    line-height: 1.5rem;
    font-size: 0.8rem;
    color: ${(p) => p.theme.semanticColors.bodySubtext};
  }
`;
