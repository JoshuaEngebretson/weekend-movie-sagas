import "./Header.css";
import { Link, useHistory } from "react-router-dom/";
// material-ui Components
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
// material-ui Icons
import HomeIcon from "@mui/icons-material/Home";

export default function Header() {
	const StyledButton = styled(Button)(() => ({
		backgroundColor: "rgb(15, 133, 102)",
		color: "rgb(255,255,255)",

		"&:hover": {
			backgroundColor: "rgb(119, 187, 85)",
		},
	}));

	const history = useHistory();

	const sendHome = () => {
		history.push("/");
	};

	return (
		<header>
			<h1>The Movies Saga!</h1>
			<StyledButton
				type="button"
				onClick={sendHome}
				variant="contained"
			>
				<Link to="/">
					<HomeIcon fontSize="large" />
				</Link>
			</StyledButton>
		</header>
	);
}
