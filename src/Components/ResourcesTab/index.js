import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Link, Typography, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        width: "60%",
        margin: "2rem auto 2rem auto",
        background: "#525848",
        color: "#F2ECC9"
    },
    link: {
        color: "#bdc9a6"
    },
    para: {
        marginBottom: "1rem"
    }
}));

function ResourcesTab(props) {
    const { index, value } = props;
    const classes = useStyles();

    return (
        <div hidden={value !== index}>
            <Card elevation={4} className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.para}>
                        Math and Prelims:
                    </Typography>

                    <Typography variant="body1" component="p" className={classes.para}>
                        If you're interested in going to grad school, check out{" "}
                        <Link href="https://mathalliance.org/graduate-school-faq" target="_blank" rel="noopener" className={classes.link}>this page</Link>
                        {" "}from Math Alliance and{" "}
                        <Link href="https://www.math.uci.edu/math-majors/math-grad-school-resources" target="_blank" rel="noopener" className={classes.link}>this page</Link>
                        {" "}by UC - Irvine for some good information!
                    </Typography>

                    <Typography variant="body1" component="p" className={classes.para}>
                        If you're studying for preliminary/qualifying exams,{" "}
                        <Link href="https://dzackgarza.com/quals" target="_blank" rel="noopener" className={classes.link}>this page</Link>
                        {" "}is full of wonderful resources! Shout out to{" "}
                        <Link href="https://dzackgarza.com" target="_blank" rel="noopener" className={classes.link}>Zack Garza</Link>
                        {" "}for creating such an incredible list and letting me share it on my page!
                    </Typography>

                    <Typography variant="body1" component="p">
                        Also, a book that was recommended to me before starting grad school that I{" "}
                        found extremely helpful was{" "}
                        <Link href="https://www.amazon.com/All-Mathematics-Missed-Thomas-Garrity/dp/0521797071" target="_blank" rel="noopener" className={classes.link}>{"All the Mathematics You Missed [But Need to Know for Grad School]"}</Link>
                        {" "}by Thomas A. Garrity!
                    </Typography>
                </CardContent>
            </Card>

            <Card elevation={4} className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.para}>
                        Operator Algebra Community:
                    </Typography>

                    <Typography variant="body1" component="p" className={classes.para}>
                        If you're interested in finding out more about what's going on in the world{" "}
                        of Operator Algebras, check out{" "}
                        <Link href="https://operatoralgebras.org" target="_blank" rel="noopener" className={classes.link}>Oasis</Link>
                        .
                        Also, if you're a woman interested in operator algebras, check out{" "}
                        <Link href="https://oamentornetwork.wordpress.com" target="_blank" rel="noopener" className={classes.link}>Operator Algebras Mentor Network</Link>
                        .
                    </Typography>
                </CardContent>
            </Card>

            <Card elevation={4} className={classes.card}>
                <CardContent>
                    <Typography variant="h6" className={classes.para}>
                        Diversity & Inclusion:
                    </Typography>

                    <Typography variant="body1" component="p" className={classes.para}>
                        For some reading on being a woman in math, check out{" "}
                        <Link href="https://ilaba.wordpress.com/2013/02/09/gender-bias-101-for-mathematicians/" target="_blank" rel="noopener" className={classes.link}>Gender Bias 101 For Mathematicians</Link>
                        {" "}and{" "}
                        <Link href="https://ilaba.wordpress.com/2013/08/28/gender-bias-102-for-mathematicians-merit/" target="_blank" rel="noopener" className={classes.link}>Gender Bias 102 For Mathematicians: Merit</Link>
                        {" "}from{" "}
                        <Link href="https://ilaba.wordpress.com/" target="_blank" rel="noopener" className={classes.link}>The Accidental Mathematicians</Link>
                        .
                    </Typography>

                    <Typography variant="body1" component="p">
                        A list of some great organizations and resources:
                    </Typography>

                    <List>
                        <ListItem>
                            <Link href="https://awm-math.org" target="_blank" rel="noopener" className={classes.link}>Association for Women in Math (AWM)</Link>
                        </ListItem>

                        <ListItem>
                            <Link href="https://mathematicallygiftedandblack.com" target="_blank" rel="noopener" className={classes.link}>Mathematically Gifted & Black</Link>
                        </ListItem>

                        <ListItem>
                            <Link href="http://lgbtmath.org" target="_blank" rel="noopener" className={classes.link}>Spectra</Link>
                        </ListItem>

                        <ListItem>
                            <Link href="https://www.edgeforwomen.org" target="_blank" rel="noopener" className={classes.link}>EDGE</Link>
                        </ListItem>

                        <ListItem>
                            <Link href="https://minoritymath.org" target="_blank" rel="noopener" className={classes.link}>Center for Minorities in the Mathematical Sciences</Link>
                        </ListItem>

                        <ListItem>
                            <Link href="https://www.mathalliance.org" target="_blank" rel="noopener" className={classes.link}>Math Alliance</Link>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </div>
    );
}

export default ResourcesTab;