import React,{Fragment} from 'react';
import { connect } from 'dva';
import { constants } from 'os';
import styles from './Rank.scss';
import { Carousel, Icon } from 'antd';

class RankPage extends React.PureComponent{
  componentDidMount(){
    this.props.getList();
  }
  render(){
    let {topList} = this.props;
    console.log(topList)
    if(!topList || topList.length){
      return null;
    }
    
    return  <div className={styles.cont}>
     {topList.topList.map((item,index)=>{
       return <div key={index} className={styles.list}>
                <dd>
                  <a href=''>
                    <img src={item.picUrl}></img>
                  </a>
                  <p className={styles.num}>{item.listenCount}</p>
                </dd>
                <dt>
                  <div className={styles.title}>{item.topTitle}</div>
                  {
                    item.songList.map((items,indexs)=>{
                      return <div key={indexs}>
                        <li className={styles.sing}>
                          <span className={styles.singNmae}>{items.songname}</span>
                          <span>--</span>
                          <span>{items.singername}</span>
                        </li>
                      </div>
                    })
                 } 
                </dt>
                <Icon type="right" style={{ fontSize: '12px'}} className={styles.icon}></Icon>
              </div> 
     })}
    </div>;
  }
}


const mapStateToProps = (state)=>{
  console.log('state', state)
  return {
    topList:state.rank.payload
  }
  
}
const mapDispatchToProps = (dispatch)=>{
  return {
    getList:()=>{
        dispatch({
            type:'rank/getList'
        })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RankPage);
