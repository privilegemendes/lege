import React, { FC } from 'react'
import { Info, X } from 'react-feather'

import VisuallyHidden from '../VisuallyHidden/VisuallyHidden'

import styles from './Toast.module.css'
import styled from 'styled-components'

// const ICONS_BY_VARIANT = {
//   notice: Info,
//   warning: AlertTriangle,
//   success: CheckCircle,
//   error: AlertOctagon,
// };

// type variant = {
//   notice: 'notice',
//   warning: 'warning',
//   success: 'success',
//   error: 'error',
// }

type Props = {
  variant: string
}

export const ToastShelf: FC = () => {

  return <Wrapper>
    <Toast variant={'error'}/>
  </Wrapper>;
}

export const Toast: FC<Props> = ({variant }) => {

  const [message, setMessage] = React.useState('');

  switch (variant) {
    case 'notice':
      setMessage('This is a notice.');
      break;
    case 'warning':
      setMessage('This is a warning.');
      break;
    case 'success':
      setMessage('This is a success.');
      break;
    case 'error':
      setMessage('This is an error.');
      break;
    default:
      setMessage('');
  }

  return <ToastContainer>
      <div className={`${styles.toast} ${styles.notice}`}>
        <div className={styles.iconContainer}>
          <Info size={24} />
        </div>
        <p className={styles.content}>
          {message}
        </p>
        <button className={styles.closeButton}>
          <X size={24} />
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </button>
      </div>
    </ToastContainer>
}



const Wrapper = styled.ul` {
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  list-style-type: none;
`;

const ToastContainer = styled.li`
  animation: toast 800ms cubic-bezier(0, 0.46, 0, 1.04) both;
  will-change: transform;
`;

// const Content = styled.p`{
//   flex: 1;
//   padding: 12px 0px;
//   font-weight: 600;
// }
// `;
// const IconContainer = styled.div`{
//   flex-shrink: 0;
//   padding: 16px;
//   padding-right: 0px;
// }
// .iconContainer svg {
//   display: block;
// }`;
//
// const title = styled.h2` {
//   font-weight: 700;
//   margin-bottom: 4px;
// }`;
//
// const CloseButton = styled.button` {
//   flex-shrink: 0;
//   border: none;
//   background: transparent;
//   padding: 16px;
//   cursor: pointer;
// }`;
//
// const Notice = styled.div` {
//   background: var(--color-notice-bg);
// }`;





export default Toast;
