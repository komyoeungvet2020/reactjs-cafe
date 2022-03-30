import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/NarBar.module.css";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  ListItemText,
} from "@material-ui/core";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import useStates from "../../hooks/useState";

const Navbar = () => {
  const router = useRouter();

  const [state, setState]: any = useStates({
    open: false,
  });
  const { open } = state;

  const menuItems = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Listing",
      path: "/listing",
    },
    {
      text: "Detail",
      path: "/detail",
    },
  ];

  return (
    <div className={styles.StyledNavBar}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setState({ open: true })}
            edge="start"
          >
            <MenuOpenIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Menu
          </Typography>
          <div className={styles.Narbar_Wrapper}>
            {menuItems.map((Items) => (
              <Link key={Items.text} href={Items.path} passHref>
                <IconButton color="inherit" aria-label="open drawer" edge="end">
                  <ListItemText
                    className={
                      router.pathname == Items.path
                        ? `${styles.active_Narbar}`
                        : ""
                    }
                  >
                    {Items.text}
                  </ListItemText>
                </IconButton>
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
