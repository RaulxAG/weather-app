export default function ErrorMessage({ message }) {
    return (
      <p style={{ color: 'red', backgroundColor: 'black', width: 'fit-content', borderRadius: '10px', padding: '1rem' }}>
        Error: {message}
      </p>
    );
  }