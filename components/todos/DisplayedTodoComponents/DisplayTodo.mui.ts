export const DisplayTodoStyles = {
  costAndVendor: {
    display: 'flex',
    justifyContent: 'center',
  },
  todoTitle: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'default',
    color: 'ivory',
    margin: '0.5rem 0.25rem',
    textAlign: 'center',
  },
  todoEditLink: {
    position: 'relative',
    color: 'ivory',
    cursor: 'pointer',
    top: '45%',
    '&:hover': {
      color: 'darkblue',
    },
  },
  todoContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid darkblue',
    padding: '0.5rem',
  },
  todoTitleContainer: {
    flex: 1,
  },
  todoNote: {
    fontSize: '0.75vmax',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
  },
};
