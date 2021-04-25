import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { Slide, Fade, AppBar, Tabs, Tab } from '@material-ui/core/';
import AboutTab from '../AboutTab';
import TeachingTab from '../TeachingTab';
import ResourcesTab from '../ResourcesTab';
import CVTab from '../CVTab';

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        width: "73%",
        float: "right"
    },
    appbar: {
        background: "#383c31"
    },
    tabs: {
        color: "#F2ECC9"
    },
    indicator: {
        backgroundColor: "#F2ECC9"
    }
}));

function TabNav() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.mainDiv}>
            <Slide direction="down" in={true} appear={true} timeout={1600} mountOnEnter>
                <AppBar position="static" className={classes.appbar}>
                    <Tabs value={value} onChange={handleChange} variant="fullWidth" className={classes.tabs} classes={{indicator: classes.indicator }}>
                        <Tab label="About" itemID={0} />
                        <Tab label="Teaching" itemID={1} />
                        <Tab label="Resources" itemID={1} />
                        <Tab label="CV" itemID={2} />
                    </Tabs>
                </AppBar>
            </Slide>

            <Fade in={true} appear={true} timeout={1600} mountOnEnter>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <AboutTab value={value} index={0} dir={theme.direction} />
                    <TeachingTab value={value} index={1} dir={theme.direction} />
                    <ResourcesTab value={value} index={2} dir={theme.direction} />
                    <CVTab value={value} index={3} dir={theme.direction} />
                </SwipeableViews>
            </Fade>
        </div>
    );
}

export default TabNav;