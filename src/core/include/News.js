import React, {Component} from 'react';
import NewItem from "../components/NewItem";
import data from '../data';

class News extends Component {
    render() {
        return (
            <section className="container">
                <div className="main-header text-center">
                    <h1> Đây là trang tin tức.</h1>
                </div>
                <div className="main-content">
                    <div className="main-content-title text-center my-5">
                        <h1>Đây là nội dung của trang tin tức</h1>
                    </div>
                    <div className="main-content-list row">
                        {
                            data.map((value, key) => {
                                return (
                                    <NewItem key={key} id={value.id}
                                             image={value.image}
                                             title={value.title} content={value.content}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default News;