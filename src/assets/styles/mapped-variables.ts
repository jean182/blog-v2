import { css } from "styled-components";

export const cssVars = css`
  :root {
    // Colors
    --bg: #ffffff;
    --checked-text: #0b0b0b;
    --primary-bg: #6a5acd;
    --primary-bg-pressed: #50449b;
    --hover-link: #3b3272;
    --primary-bg-hovered: #5e51b8;
    --placeholder-bg: #e4e1f7;
    --body-bg-checked: #eaeaea;
    --body-bg-hovered: #f4f4f4;
    --body-bg-standout: #f8f8f8;
    --disabled-button-text: #d0d0d0;
    --disabled-body-text: #595959;
    --text: #000000;
    --button-hover-text: #151515;
    --subtext: #373737;
    --disabled-subtext: #c8c8c8;
    --transparent: transparent;
    --error-text: #a4262c;
    --warning-text: #323130;
    --message-link: #005a9e;
    --message-link-hovered: #004578;
    --info-icon: #605e5c;
    --error-icon: #a80000;
    --blocking-icon: #fde7e9;
    --warning-icon: #797775;
    --severe-warning-icon: #d83b01;
    --success-text: #107c10;
    --info-bg: #f3f2f1;
    --warning-bg: #fff4ce;
    --severe-warning-bg: #fed9cc;
    --card-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
      0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);
    --success-bg: #dff6dd;
    --warning-highlight: #ffb900;
    // Stack
    ${(p) => p.theme.stack.generateVars()}
  }

  body.dark {
    --bg: #121212;
    --checked-text: #f8f8f8;
    --primary-bg: #f19ec8;
    --primary-bg-pressed: #f5b6d6;
    --hover-link: #f8c9e0;
    --primary-bg-hovered: #f4a9ce;
    --value-unique: #271a20;
    --body-bg-checked: #101010;
    --body-bg-hovered: #252525;
    --disabled-button-text: #0f0f0f;
    --disabled-body-text: #c8c8c8;
    --text: #ffffff;
    --button-hover-text: #f4f4f4;
    --card-shadow: 0 1.6px 3.6px 0 rgba(255, 255, 255, 0.132),
      0 0.3px 0.9px 0 rgba(255, 255, 255, 0.108);
    --subtext: #d0d0d0;
    --disabled-subtext: #0e0e0e;
    --transparent: transparent;
  }
`;