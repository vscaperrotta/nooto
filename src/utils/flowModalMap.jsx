import React from 'react';
import ModalSettings from 'Components/ModalSettings';

const flowModalTypes = {
  MODAL_SETTING: 'MODAL_SETTING'
}

const flowModalMap = {
  [flowModalTypes.MODAL_SETTING]: <ModalSettings />,
}

export default flowModalMap