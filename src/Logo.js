import logo from './logo.svg';

function Logo() {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <img src={logo} alt="Logo du site" width="150" />
      <p>Illustration intégrée dynamiquement avec React </p>

    </div>
  );
}

export default Logo;