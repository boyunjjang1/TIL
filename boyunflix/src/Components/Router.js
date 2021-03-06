import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
// Switch는 한번에 하나의 Route만 rendering 하게 해준다.
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
    <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            {/*<Route path="/tv/popular" render={() => <h1>Popular</h1>}/>*/}
            <Route path="/search" component={Search} />
            <Route path="/movie/:id" component={Detail}/>
            <Route path="/show/:id" component={Detail}/>
            <Redirect from="*" to="/" />
            {/*     어느 페이지든 받아서 '/'로 보내준다 */}
        </Switch>
    </Router>
)