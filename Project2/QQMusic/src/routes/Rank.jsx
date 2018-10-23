import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Link } from "dva/router"
import styles from "./css/Rank/rank.scss"
class Rank extends React.PureComponent {
    componentDidMount() {
        this.props.getRank();
    }
    render() {
        // console.log(this.props.topList)
        let { topList } = this.props;
        return <Link className={styles.wrap} to="/Detail">
            {
                topList && topList.map((item, index) => {
                    return <dl key={index}>
                        <dt>
                            <img src={item.picUrl} alt="" />
                        </dt>
                        <dd>
                            <p>{item.topTitle}</p>
                            <ol>
                                {item.songList.map((ite, ind) => {
                                    return <li key={ind}>{ite.songname}-{ite.singername}</li>
                                })
                                }
                            </ol>
                        </dd>
                    </dl>
                })
            }
        </Link>
    }
}


const mapStateToProps = (state) => {
    return { ...state.Rank }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRank: () => {
            dispatch({
                type: 'Rank/getRank'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rank);
