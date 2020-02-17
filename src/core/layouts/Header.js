import React, {Component} from 'react';
import Url from '../components/Link';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">React Router - News</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Url path="/home" text="Trang chủ"/>
                        <Url path="/tin-tuc" text="Tin tức"/>
                        <Url path="/lien-he" text="Liên hệ"/>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Tìm kiếm"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm kiếm</button>
                    </form>
                </nav>
            </header>
        );
    }
}

export default Header;