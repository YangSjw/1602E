import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Link } from "dva/router"
import styles from "./css/Detail/detail.scss"
class Detail extends React.PureComponent {
    componentDidMount() {
        this.props.getDetail();
    }
    render() {
        console.log(this.props.songlist)
        let { songlist, topinfo } = this.props;
        if (!topinfo) {
            return null;
        }
        return <div className={styles.wrap}>
            <div className={styles.top}>
                <img src={topinfo.pic_album} alt="" />
                <div className={styles.word}>
                    <h3>{topinfo.ListName}</h3>
                    <p>第{this.props.day_of_year}天</p>
                    <p>{this.props.update_time}更新</p>
                </div>
                {/* <span>全部播放</span> */}
            </div>
            <div className={styles.list}>
                <p style={{ paddingLeft: "13px" }}>排行榜  共100首</p>
                <ul>
                    {
                        songlist && songlist.map((item, index) => {
                            return <li key={index}>
                                <span>{index + 1}</span>
                                <div>
                                    <h3>{item.data.albumname}</h3>
                                    <p>{item.data.singer[0].name}</p>
                                </div>
                            </li>
                        })
                    }

                </ul>
            </div>
        </div>
    }
}


const mapStateToProps = (state) => {
    console.log(state.Detail)
    return { ...state.Detail }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetail: () => {
            dispatch({
                type: 'Detail/getDetail'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
