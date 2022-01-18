import React from 'react';

import { useTranslation } from 'react-i18next';
import './i18next'

const Tes = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>
        { t("tes.Hello")}</h1>
    </div>
  );
}

export default Tes;
