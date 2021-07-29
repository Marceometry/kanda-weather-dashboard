import styled from "styled-components"

const SettingsContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  > button {
    font-size: 0;
    position: absolute;
    right: 0;

    svg {
      width: 2.5rem;
      height: 2.5rem;
      transition: .2s;
    }

    &:hover {
      svg {
        transform: rotate(90deg);
      }
    }
  }
  
  h1 {
    margin-bottom: 2rem;
  }
`

export default SettingsContainer


export const ModalStyles = {
  overlay: {
    background: "var(--body-background)",
    transition: "opacity .2s",
    opacity: 0,
  },
  content: {
    padding: "3rem",
    borderRadius: "8px",
    border: '1px solid var(--border-color)',
    background: "var(--background)",
  },
}