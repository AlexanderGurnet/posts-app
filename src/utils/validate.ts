const atleastOneCharMsg = 'The value must be at least 1 character long.';
const lessThan30CharsMsg = 'The value must be less than 30 characters long.';

export const validate = (
  inputRef: React.RefObject<HTMLInputElement>,
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>
) => {
  if (inputRef.current && inputRef.current.value.length > 30) {
    setErrorMsg(lessThan30CharsMsg);
    inputRef.current.value = '';
    return false;
  } else if (inputRef.current && inputRef.current.value.length < 1) {
    setErrorMsg(atleastOneCharMsg);
    inputRef.current.value = '';
    return false;
  } else {
    setErrorMsg('');
    return true;
  }
};
