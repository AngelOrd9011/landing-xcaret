import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface LanguageState {
	language: string;
	data: any;
}

const initialState: LanguageState = {
	language: '',
	data: {},
};

export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		setLanguage: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState>) => {
			state.language = action.payload.language;
			state.data = action.payload.data;
		},
	},
});

// Selectors
export const getLanguage = (state: RootState) => state.language;

// Action creators are generated for each case reducer function
export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
