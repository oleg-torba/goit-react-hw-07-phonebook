import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { filterSlice } from './FilterSlice';

import { ContactsApi } from './ContactsSlice';

export const store = configureStore({
  reducer: {
   [ContactsApi.reducerPath]: ContactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ContactsApi.middleware]
});

setupListeners(store.dispatch)