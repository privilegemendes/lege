import React, { FC, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose'

type Props = {
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
  show: boolean;
};

const MenuModal:FC<Props> =
(
  { show ,
    onClose,
    children,
  }
) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModalWrapper>
        <StyledModalHeader onClick={handleCloseClick}>
            <AiOutlineClose size={40}/>
        </StyledModalHeader>
        <StyledModal>
          {/*{title && <StyledModalTitle>{title}</StyledModalTitle>}*/}
          <StyledModalBody>{children}</StyledModalBody>
        </StyledModal>
      </StyledModalWrapper>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.nav`
  position: absolute;
  left: 0px;
  bottom: 100px;
  width: 75%;
  height: 75%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  -moz-box-pack: justify;
  justify-content: space-between;
`;

const StyledModalHeader = styled.button`
  position: fixed;
  z-index: 10001;
  right: 32px;
  width: 40px;
  height: 40px;
  top: 12px;
  display: block;
  margin: 0px;
  padding: 0px;
  border: medium none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  outline: none;
  color: hsl(0deg, 0%, 100%);
  :focus not(:focus-visible) {
    outline: none;
  }
`;

const StyledModal = styled.div`
  transition: opacity 500ms ease 0s;
  opacity: 1;
  touch-action: none;
  display: block;
  margin: 0px;
  padding: 0px;
  border: medium none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: hsl(0deg, 0%, 100%);
`;
const StyledModalOverlay = styled.div`
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: calc(100% + 2px);
  top: -2px;
  z-index: 400;
`;

const StyledModalWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(210deg, 30%, 8%, 0.85);
  backdrop-filter: blur(8px);

`;

export default MenuModal;
