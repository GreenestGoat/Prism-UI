import { css } from 'lit';
export const styles = css `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

media-switch {
  font-weight: 500;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  --media-switch-color: #ffffff;
  --media-switch-handle-color: #000000;
  --media-switch-outline-color: rgba(94, 94, 94, .5);
  --media-switch-checked-color: #000000;
  --media-switch-checked-handle-color: #ffffff;
  --media-switch-checked-outline-color: rgba(0, 0, 0, 1);
}


.switch {
 font-size: 17px;
 position: relative;
 display: inline-block;
 width: 64px;
 height: 32px;
}

.switch input {
 display: none;
 opacity: 0;
 width: 0;
 height: 0;
}

.slider {
 position: absolute;
 cursor: pointer;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background-color: var(--media-switch-color);
 outline: 2px solid var(--media-switch-outline-color);
 transition: .2s;
 border-start-start-radius: 9999px;
 border-start-end-radius: 9999px;
 border-end-end-radius: 9999px;
 border-end-start-radius: 9999px;
}

.slider:before {
 position: absolute;
 content: "";
 height: 24px !important;
 width: 24px !important;
 border-start-start-radius: 9999px;
 border-start-end-radius: 9999px;
 border-end-end-radius: 9999px;
 border-end-start-radius: 9999px;
 left: 0.95em;
 bottom: 50%;
 top: 50%;
 background-color: var(--media-switch-handle-color);
 transition: .2s;
 transform: translate(-50%, -50%);
}

input:checked + .slider::before {
 background-color:  var(--media-switch-checked-handle-color);
}

input:checked + .slider {
 background-color: var(--media-switch-checked-color);
 outline: 2px solid var(--media-switch-checked-outline-color);
}

input:checked + .slider:before {
 top: 50%;
 bottom: 50%;
 transform: translate(1.18em, -50%);
}
`;