import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <section>
                <div className="main-header text-center">
                    <h1> Đây là trang chủ.</h1>
                </div>
                <div className="main-content text-center my-5">
                    <h1>Đây là nội dung của trang chủ</h1>
                </div>
            </section>
        );
    }
}

export default Home;