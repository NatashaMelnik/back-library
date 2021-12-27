// import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { ErrorPage } from "../errorpage/error";
import { getTest } from "./testAPI";
import { loadingTest } from "./testSlice";

const Test: FC<any> = () => {
	const param = useParams<{ uuid: string }>();
	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector((state: any) => state.user);
	const test = useSelector((state: any) => state.test);

	// const test = {title: 'test1', desc: 'descr', uuid: 'uuid'}

	// useEffect(() => {
	// 	if (user.id === null) history.push("/login", { fromTest: true });
	// 	getTest(param.uuid)
	// 		.then((res) => res.json())
	// 		.then((res) => dispatch(loadingTest(res)));
	// }, [dispatch, history, param.uuid, user.id]);

	console.log(user)
	console.log(test)

	if (test.id === undefined) {
		return <ErrorPage status={404} response='test not found' />;
	}

	return (
		<div>
			<Typography variant='h1'>{test.title} </Typography>
			<Typography variant='body1'>{test.desc} </Typography>
			<Typography variant='body2'>{test.uuid} </Typography>
		</div>
	);
};

export default Test;
