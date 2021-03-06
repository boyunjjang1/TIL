import React from "react";
import DetailPresenter from "./DetailPresenter";
import {moviesAPi, tvApi} from "api";

export default class extends React.Component{
    constructor(props) {
        super(props);
        const {location: {pathname}} = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/") // 영화인지 tv인지 구별을 위한 state 값
        };
    }

    async componentDidMount() {
        const {
            match: {params: {id}},
            history: {push}
        } = this.props;

        const {isMovie} = this.state;

        const parsedId = parseInt(id);
        if(isNaN(parsedId)){ // 숫자가 아닌 잘못된 값이 들어오면 home으로 push
            return push("/");
        }
        let result = null;
        try {
            if(isMovie){
                ({data: result} = await moviesAPi.movieDetail(parsedId));
            } else {
                ({data: result} = await tvApi.showDetail(parsedId));
            }
        } catch {
            this.setState({
                error: "Can't find anything."
            });
        } finally {
            this.setState({
                loading: false,
                result
            })
        }
    }

    render(){
        console.log(this.props);
        const {result, error, loading} = this.state;
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />
        );
    }
};