import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({topRated, popular, airingToday, error, loading}) => loading ? (<Loader/>) :
    <Container>
        {topRated && topRated.length > 0 &&
        <Section title="Top Rated Shows">
            {topRated.map(show=> show.name)}
        </Section>
        }
        {popular && popular.length > 0 &&
        <Section title="Popular Shows">
            {popular.map(show=> show.name)}
        </Section>
        }
        {airingToday && airingToday.length > 0 &&
        <Section title="Airing Today">
            {airingToday.map(show=> show.name)}
        </Section>
        }
        {error && <Message color="red" text={error}/>}
    </Container>;

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.string
};

export default TVPresenter;