import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Slide, Drawer, Typography, Link } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: "27%",
        height: "100vh",
        background: "#383c31",
        borderWidth: 0,
        textAlign: "center",
        color: "#F2ECC9",
        paddingTop: "3rem"
    },
    pic: {
        margin: "1rem 3rem 1rem 3rem"
    },
    info: {
        textAlign: "left",
        marginLeft: "1rem"
    },
    link: {
        color: "#bdc9a6"
    }
}));

function SidePanel() {
    const classes = useStyles();

    return (
        <Slide direction="right" in={true} timeout={1500}>
            <Drawer variant="permanent" anchor="left" classes={{paper: classes.drawerPaper}}>
                <Typography variant="h4">Arianna Cecco</Typography>
                <Typography variant="subtitle2">(she/her/hers)</Typography>
                
                <img src="pic.jpeg" alt="" className={classes.pic} />
                
                <div className={classes.info}>
                    <Typography variant="body1">
                        <b>Email:</b> <Link href="mailto:ahcecco@math.uh.edu" className={classes.link}>ahcecco [at] math [dot] uh [dot] edu</Link>
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        <b>Office:</b> <Link href="http://www.uh.edu/maps/buildings/?short_name=pgh" target="_blank" rel="noopener" className={classes.link}>PGH 605 </Link>
                    </Typography>

                    <Link href="http://www.math.uh.edu/" target="_blank" rel="noopener" className={classes.link}>Department of Mathematics</Link>
                    <br />
                    <Link href="http://www.uh.edu/" target="_blank" rel="noopener" className={classes.link}>University of Houston</Link>
                    <br />
                    <Typography variant="body1">3551 Cullen Blvd, Houston, Texas, 77004</Typography>
                </div>
            </Drawer>
        </Slide>
    );
}

export default SidePanel;
