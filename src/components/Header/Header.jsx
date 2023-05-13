import './Header.css'
import Button, { buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import { Link } from "react-router-dom/";
import { useHistory } from 'react-router-dom/';

export default function Header() {
  
  const history = useHistory();

  const sendHome = () => {
    history.push('/')
  }

  return (
    <header>
      <h1>The Movies Saga!</h1>
      <TriggerButton
        type="button"
        onClick={sendHome}
      ><Link to='/'>
        Home
      </Link>
      </TriggerButton>
    </header>
  )
}

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const TriggerButton = styled(Button)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  margin-top: 1%;
  padding: 8px 14px;
  line-height: 1.5;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
  }
  `,
);
