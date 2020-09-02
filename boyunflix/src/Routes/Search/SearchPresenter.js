import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all:unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({movieResults, tvResults, searchTerm, updateTerm, handleSubmit, error, loading}) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV shows..." value={searchTerm}
                onChange={updateTerm}/>
        </Form>
        {loading ? <Loader/> : (
            <>
                {movieResults && movieResults.length > 0 && <Section title="Movie Results">
                    {movieResults.map(movie=><span key={movie.id}>
                        {movie.title}
                    </span>)}
                </Section>}
                {tvResults && tvResults.length > 0 && <Section title="TV Results">
                    {tvResults.map(show=><span key={show.id}>
                        {show.name}
                    </span>)}
                </Section>}
            </>
        )}
    </Container>
);
// Enter 누르면 browser가 input시켜 버림, 새로고침되고 state가 사라진다! --> 문제점

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    updateTerm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;