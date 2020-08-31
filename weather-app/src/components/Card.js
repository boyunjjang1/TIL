import React from "react";
import PropTypes from "prop-types";
import Box from '@material-ui/core/Box';
import CardUI from '@material-ui/core/Card';
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        imgSrc: "https://img.icons8.com/all/500/cloud.png"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈",
        imgSrc: "https://img.icons8.com/all/500/cloud.png"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        imgSrc: "https://img.icons8.com/all/500/cloud.png"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no.",
        imgSrc: "https://img.icons8.com/all/500/cloud.png"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        imgSrc: "https://img.icons8.com/all/500/cloud.png"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt",
        imgSrc: "https://img.icons8.com/all/500/cloud.png"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring",
        imgInfo: "https://img.icons8.com/all/500/cloud.png"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on.",
        imgSrc: "https://img.icons8.com/all/500/cloud.png"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻",
        imgSrc: "https://img.icons8.com/all/500/cloud.png"
    },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside.",
        imgInfo: "https://img.icons8.com/all/500/cloud.png"
    }
};

const useStyles = makeStyles({
    grid: {
        height: 800,
    },

    root: {
        width: 300,
    },
    media: {
        height: 140,
        width: 200,
    },
});

export default function Card(props) {
    const { temp, condition } = props;
    const classes = useStyles();

    return (
            <Grid className={classes.grid} justify='center'>
                <CardUI className={classes.root} variant='outlined'>
                    <CardActionArea className={classes.action}>
                        <CardMedia
                            className={classes.media}
                            image={'https://image.flaticon.com/icons/svg/2150/2150309.svg'}
                            // image={weatherOptions[condition].imgInfo}
                            title='weather icon'
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            Mon
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            {condition} : {temp}
                        </Typography>
                    </CardContent>
                </CardUI>
            </Grid>
    );
}

Card.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};
