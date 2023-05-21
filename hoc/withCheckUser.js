const withCheckUser = (wrappedComponent, password) => {
  const checkPassword = password === 'ghkdlxld';

  if (checkPassword) {
    return wrappedComponent;
  } else {
    return null;
  }
};

export default withCheckUser;
