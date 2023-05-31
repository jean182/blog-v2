import styled from "styled-components";

export const StyledPostMetaWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 3rem;
  border-bottom: solid 1px rgba(242, 242, 242, 1);

  ${(p) => p.theme.breakpoints.down("md")} {
    padding-bottom: 0;
    }
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
    display: flex;
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

  .date,
  .divider,
  .reading-time {
    line-height: 1.5rem;
    font-size: 0.8rem;
    color: ${(p) => p.theme.semanticColors.bodySubtext};
  }

  .divider {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
`;
