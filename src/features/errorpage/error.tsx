import { Typography } from "@material-ui/core";
import { FC } from "react";

interface errorProps {
	status: number;
	response: string;
}

export const ErrorPage: FC<errorProps> = ({ status, response }) => {
	return (
		<div>
			<Typography variant='h1'>{status}</Typography>
			<Typography variant='body1'>{response}</Typography>
		</div>
	);
};
