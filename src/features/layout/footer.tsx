import { Box, Link, Typography } from "@material-ui/core";
import { FC } from "react";

export const Footer: FC<any> = () => {
	return (
		<Box mt={8}>
			<Typography variant='body2' color='textSecondary' align='center'>
				{"Copyright © "}
				<Link color='inherit' href='https://material-ui.com/'>
					Quiz
				</Link>
				{new Date().getFullYear()}
			</Typography>
		</Box>
	);
};
