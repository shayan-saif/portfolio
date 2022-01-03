import { AppBar, Button, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { useState } from "react";
import Link from "next/link";

const Navbar = ({ links, route }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Hidden smUp>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "end",
                            width: "100%"
                        }}>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setExpanded(true)}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Hidden>
                    <Hidden smDown>
                        <Stack flexDirection="row" justifyContent="center" width="100%" gap="1rem">
                            {links.map((link, index) => <Link href={link.href} key={index} passHref><Button color="inherit">{link.label}</Button></Link>)}
                        </Stack>
                    </Hidden>
                    <Drawer anchor="right" open={expanded} onClose={() => setExpanded(false)}>
                        <List>
                            {links.map((link, index) => {

                                return (
                                    <Link href={link.href} key={index} passHref>
                                        <ListItem button sx={{ minWidth: "15rem" }} onClick={() => setExpanded(false)}>
                                            <ListItemIcon>{link.icon}</ListItemIcon>
                                            <ListItemText primary={link.label} />
                                        </ListItem>
                                    </Link>
                                )
                            })}

                        </List>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
