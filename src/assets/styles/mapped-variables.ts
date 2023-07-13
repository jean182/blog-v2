
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
    --error-text: #dc3545;
    --warning-text: #323130;
    --message-link: #005a9e;
    --message-link-hovered: #004578;
    --info-icon: #605e5c;
    --error-icon: #a80000;
    --error-bg: 220, 53, 69;
    --blocking-icon: #fde7e9;
    --warning-icon: #797775;
    --severe-warning-icon: #d83b01;
    --success-text: #198754;
    --info-bg: #f3f2f1;
    --warning-bg: #fff4ce;
    --severe-warning-bg: #fed9cc;
    --card-shadow: 0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132),
      0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108);
    --success-bg: 25, 135, 84;
    --warning-highlight: #ffb900;
    --scrollbar-thumb: rgba(0,0,0,0.2);
    // Stack
    ${(p) => p.theme.stack.generateVars()}

    // Modal variables
    --modal-zindex: 1055;
    --modal-width: 500px;
    --modal-padding: 1rem;
    --modal-margin: 0.5rem;
    --modal-border-color: rgba(255, 255, 255, 0.15);
    --modal-border-width: 1px;
    --modal-border-radius: 0.5rem;
    --modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    --modal-inner-border-radius: calc(0.5rem - 1px);
    --modal-header-padding-x: 1rem;
    --modal-header-padding-y: 1rem;
    --modal-header-padding: 1rem 1rem;
    --modal-header-border-color: #495057;
    --modal-header-border-width: 1px;
    --modal-title-line-height: 1.5;
    --modal-footer-gap: 0.5rem;
    --modal-footer-bg: ;
    --modal-footer-border-color: #495057;
    --modal-footer-border-width: 1px;
    --backdrop-zindex: 1050;
    --backdrop-bg: #000;
    --backdrop-opacity: 0.5;
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
    --scrollbar-thumb: rgba(255, 255, 255, 0.2);
    --success-text: #75b798;
    --error-text: #ea868f;
  }

  body.contrast {
    --bg: #000;
    --checked-text: #ffffff;
    --primary-bg: #1aebff;
    --primary-bg-pressed: #000;
    --hover-link: #f8c9e0;
    --primary-bg-hovered: #ffff01;
    --value-unique: #271a20;
    --body-bg-checked: #1aebff;
    --body-bg-hovered: #ffff01;
    --disabled-button-text: #3ff23f;
    --disabled-body-text: #ffffff;
    --text: #ffffff;
    --button-hover-text: #000;
    --card-shadow: 0 1.6px 3.6px 0 rgba(255, 255, 255, 0.132),
      0 0.3px 0.9px 0 rgba(255, 255, 255, 0.108);
    --subtext: #ffffff;
    --disabled-subtext: #ffffff;
    --transparent: transparent;
    --scrollbar-thumb: rgba(255, 255, 255, 0.2);
  }
`;
