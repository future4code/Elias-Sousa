import {BrowserRouter, Switch, Route} from "react-router-dom";
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Header from '../components/Header/Header'



const Router =()=>{
return (
<BrowserRouter>
<Header/>
<Switch>

<Route exact path={"/login"}>
<LoginPage/>
</Route>

<Route exact path={"/"}>
<FeedPage/>
</Route>

<Route exact path={"/detail:id"}> 
<PostDetailPage/>
</Route>

<Route exact path={"/sign"}>
<SignUpPage/>
</Route>


<Route exact path={""}>
<ErrorPage/>
</Route>

</Switch>
</BrowserRouter>

)
}
export default Router;