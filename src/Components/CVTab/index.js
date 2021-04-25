import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme) => ({
    card: {
        width: "630px",
        margin: "2rem auto 2rem auto",
        background: "#525848",
        color: "#F2ECC9",
        textAlign: "center",
        alignContent: "center"
    },
    lastUpdated: {
        marginBottom: "1rem"
    }
}));

function CVTab(props) {
    const classes = useStyles();
    const { index, value } = props;

    return (
        <div hidden={value !== index}>
            <Card elevation={4} className={classes.card}>
                <CardContent>
                    <Typography variant="body1" component="p" className={classes.lastUpdated}>
                        Last Updated March 2021
                    </Typography>
                    
                    <Document file="cecco_cv.pdf">
                        <Page pageNumber={1} />
                    </Document>
                    <Document file="cecco_cv.pdf">
                        <Page pageNumber={2} />
                    </Document>
                </CardContent>
            </Card>
        </div>
    );
}

export default CVTab;