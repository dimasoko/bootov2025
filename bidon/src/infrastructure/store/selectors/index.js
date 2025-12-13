import { createSelector } from '@reduxjs/toolkit';

export const selectHasOpenModals = createSelector(
  [(state) => state.modals],
  (modals) => {
    return modals.newsForm.isOpen || modals.serviceForm.isOpen;
  }
);

export const selectActiveFormType = createSelector(
  [(state) => state.modals],
  (modals) => {
    if (modals.newsForm.isOpen) return 'news';
    if (modals.serviceForm.isOpen) return 'service';
    return null;
  }
);

export const selectEditingData = createSelector(
  [(state) => state.modals, (state, formType) => formType],
  (modals, formType) => {
    if (formType === 'news') return modals.newsForm.editData;
    if (formType === 'service') return modals.serviceForm.editData;
    return null;
  }
);
