import React from 'react';
import { connect } from 'dva';
import styles from "./css/Detail/detail.scss";
import { Icon } from 'antd';

class Detail extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      playing: false,
      currentTime: 0
    }
  }
  componentDidMount() {
    this.props.getDetail();
  }
  // 播放
  play(){
    this.setState({
      playing: !this.state.playing
    }, ()=>{
      this.state.playing?this.refs.audio.play(): this.refs.audio.pause()
    })
  }

  // 播放更新
  timeUpdate(){
    this.setState({
      currentTime: this.refs.audio.currentTime
    })
  }

  // 格式化时间
  formTime(time){
    let min = Math.floor(time/60)+'',
        sec = Math.floor(time%60)+'';
    return min.padStart(2, 0)+':'+sec.padStart(2, 0);
  }

  // touchStart
  touchStart(){
    console.log(1)
    this.setState({
      playing: false
    }, ()=>{
      this.refs.audio.pause();
      console.log(this.state.playing);
    })
  }

  touchMove(e){
    console.log(e.touches[0]);
    this.setState({
      currentTime: (e.touches[0].pageX/window.innerWidth)*this.refs.audio.duration
    })
  }

  touchEnd(){
    this.refs.audio.currentTime = this.state.currentTime;
    this.setState({
      playing: true
    }, ()=>{
      this.refs.audio.play();
    })
  }

  render() {
    // console.log(this.props.songlist)
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

      {/* 音频播放组件 */}
      <audio ref="audio"  onTimeUpdate={()=>this.timeUpdate()} controls src="http://111.202.98.144/amobile.music.tc.qq.com/C400001dPKD40OUxFz.m4a?guid=7661326472&vkey=6D4D85F588675B6C3C996BF0481CFD0E8EC4B48780FF2767237226BFA55C5C886B0027617865E93F4234D88B8EA8EB47D15217D09D595B9A&uin=0&fromtag=38"></audio>
      {/* 音频播放组件控制台 */}
      <section>
        <Icon type={this.state.playing?'pause-circle': 'play-circle'} onClick={this.play.bind(this)}></Icon>
        {this.refs.audio?<p>{`${this.formTime(this.state.currentTime)}/${this.formTime(this.refs.audio.duration)}`}</p>:null}
        {this.refs.audio?<p className={styles.progress}
          onTouchStart={this.touchStart.bind(this)}
          onTouchMove={this.touchMove.bind(this)}
          onTouchEnd={this.touchEnd.bind(this)}>
          <span style={{"width": this.state.currentTime/this.refs.audio.duration*100+'%'}}></span>
        </p>:null}
      </section>
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
