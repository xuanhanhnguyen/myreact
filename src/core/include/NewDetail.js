import React, {Component} from 'react';
import NewItem from "../components/NewItem";
import data from '../data';

class NewDetail extends Component {

    render() {
        let item = data.filter((value) => {
            return value.id == this.props.match.params.id;
        });
        return (
            <section className="container">
                <div className="main-header text-center">
                    <h1> Đây là trang chi tiết tin tức.</h1>
                </div>
                <div className="main-content">
                    <div className="main-content-title text-center my-5">
                        <h1>Đây là nội dung của trang chi tiết tin tức</h1>
                    </div>
                    <div className="main-content-list">
                        <div className="main-content-list-item">
                            <img width="100%" src={item[0].image} alt=""/>
                            <h3>{item[0].title}</h3>
                            <p>{item[0].content}</p>
                        </div>
                    </div>
                </div>
                <div className="main-footer">
                    <div className="row">
                        {
                            data.map((value, key) => {
                                if (value.id != this.props.match.params.id) {
                                    return (
                                        <NewItem key={key} id={value.id}
                                                 image={value.image}
                                                 title={value.title} content={value.content}/>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default NewDetail;