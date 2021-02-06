export const updatePagesData = (data) => ({
    type: 'UPDATE_PAGES_DATA',
    payload: data
})

export const updateTranslation = (language) => ({
    type: 'CHANGE_TRANSLATION',
    payload: language
})