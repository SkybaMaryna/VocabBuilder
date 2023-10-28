export const selectIsOnline = state => state.auth.online;
export const selectUserName = state => state.auth.user.name;
export const selectToken = state => state.auth.accessToken;
export const selectCategories = state => state.words.categories;
export const selectCountWords = state => state.words.totalCountWords;
