import { AppBar, Button, Grid, Toolbar, Typography } from "@material-ui/core";
import { FC } from "react";

interface propTypes {
  title: string;
}

export const Header: FC<propTypes> = ({ title }) => {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h6">{title}</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className="button"
              style={{ marginRight: "2rem" }}
              href="/"
            >
              All Books
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="button"
              style={{ marginRight: "2rem" }}
              href="/profile"
            >
              profile
            </Button>
            <Button
              variant="contained"
              className="button"
              color="primary"
              href="/login"
            >
              Login
            </Button>
            <Button
              variant="contained"
              className="button"
              color="primary"
              href="/signup"
            >
              signup
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
