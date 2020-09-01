import React from "react";
import HomePresenter from "./HomePresenter";
import {moviesAPi} from "api";

export default class extends React.Component{
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        // API 요청!
        try {
            // const nowPlaying = await moviesAPi.nowPlaying();
            const {data: {results: nowPlaying}} =  await moviesAPi.nowPlaying();  // data 비구조화 활당
            const {data: {results: upcoming}} = await moviesAPi.upcoming();
            const {data: {results: popular}} = await moviesAPi.popular();

            this.setState({
                nowPlaying,
                upcoming,
                popular
            });

        }catch {
            this.setState({
                error: "Can't find movies information."
            });
        } finally { // 성공하더라도 마지막에 무조건 호출
            this.setState({
                loading: false
            });
        }
    }

    render(){
        const {nowPlaying, upcoming, popular, error, loading} = this.state;
        console.log(this.state);
        return (
            <HomePresenter
            nowPlaying={nowPlaying}
            upcoming={upcoming}
            popular={popular}
            error={error}
            loading={loading}
        />
        );
    }
};