import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Link, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        width: "60%",
        margin: "2rem auto 2rem auto",
        background: "#525848",
        color: "#F2ECC9"
    },
    link: {
        color: "#bdc9a6"
    }
}));

function AboutTab(props) {
    const { index, value } = props;
    const classes = useStyles();

    return (
        <div hidden={value !== index}>
            <Card elevation={4} className={classes.card}>
                <CardContent>
                    <Typography variant="h6">
                        Hello,
                    </Typography>

                    <Typography variant="body1" component="p">
                        I am a second year Ph.D student here at the University of Houston.
                        I currently serve as the vice president for our local{" "}
                        <Link href="https://www.math.uh.edu/awm/" target="_blank" rel="noopener" className={classes.link}>AWM chapter</Link>
                        {" "}and one of the Grad Student Representatives for our department.
                    </Typography>
                </CardContent>
            </Card>

            <Card elevation={4} className={classes.card}>
                <CardContent>
                    <Typography variant="h6">
                        Research Interests:
                    </Typography>

                    <Typography variant="body1" component="p">
                        Operator Algebras, Functional Analysis
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default AboutTab;