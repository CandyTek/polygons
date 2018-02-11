/**
 * Reducers for the index page
 *
 * Each reducer is a pure function of the state, which is an immutable object
 * containing the state of the entire app
 *
 * Note that you can easily use ImmutableJS to store the state, though it requires
 * a small change in the store creator function
 */

export const handleButtonClick = (state, { message }) => ({
    ...state,
    message: message || state.inputValue
});

export const handleInputChange = (state, { value }) => ({
    ...state,
    inputValue: value
});

