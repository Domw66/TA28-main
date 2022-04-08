import React, { useRef } from 'react'

import './index.css'
export default function ViewPhoto() {
  const container = useRef();
  // const isDiv = container.current

  // container.current.addEventListener("wheel", (event) => {
  //   event.preventDefault();
  //   container.current.scrollLeft += event.deltaY
  // })




  function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
  }

  window.onload = function () {
    var oBox = document.getElementById('box');
    // alert(getStyle(oBox,'width'));        // 700px
    var oLeft = document.getElementById('left');
    var oRight = document.getElementById('right');
    var oWrap = document.getElementById('wrap');
    var num = 0;
    var timer = null;

    oLeft.onmousedown = function () {
      oWrap.timer = setInterval(function () {
        var dis = parseInt(getStyle(oWrap, 'left')) - 5;
        if (dis < -650) {
          dis = -650;
        }
        oWrap.style.left = dis + 'px';
      }, 30);
    };

    oLeft.onmouseup = function () {
      clearInterval(oWrap.timer);
    };

    oRight.onmousedown = function () {
      oWrap.timer = setInterval(function () {
        var dis = parseInt(getStyle(oWrap, 'left')) + 5;
        if (dis > 0) {
          dis = 0;
        }
        oWrap.style.left = dis + 'px';
      }, 30);
    };

    oRight.onmouseup = function () {
      clearInterval(oWrap.timer);
    };
  };
  // window.onload()


  return (

    <div className='reportMain'>
      {/* 箭头部分 */}
      <div className='isArrow'>
        <div></div>
        <div className='isRightFd'>
          <div className='isBtn isLeftArrowBg' id='left'></div>
          <div className='isBtn isRightArrowBg isSetGreenBg' id='right'></div>
          <div className="greenBox"></div>
        </div>
      </div>
      {/* 活动部分 */}
      <div className='isPhoto_Main inner-container' ref={container} id='oBox'>
        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/wtk.jpg')} alt="" />
          <div className='gameText'>Role-Play game</div>
          <div className='text fz-24'>Who is the Killer!?</div>
          <div className='message'>The number of participants was six to eight people, there are five people now, we are all Chinese international students and usually play on weekends</div>
        </div>


        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/mahjong.jpg')} alt="" />
          <div className='gameText'>Card Game</div>
          <div className='text fz-24'>Mahjong -  3 wait for 1!
            URGENT!!!</div>
          <div className='message'>We usually do it on a Saturday afternoon in the CBD and we currently have two ladies and one gentleman.</div>
        </div>

        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/tableTennis.jpg')} alt="" />
          <div className='gameText'>Sport</div>
          <div className='text fz-24'>Table tennis</div>
          <div className='message'>I'm a newbie , just have fun!</div>
        </div>


        <div className='box'>
          <img className='isImageT' src={require('../../assets/images/joker.jpg')} alt="" />
          <div className='gameText'>Card game</div>
          <div className='text fz-24'>Dou di zhu(3 people game)</div>
          <div className='message'>My roommate and I both want to play Dou di zhu, and we're waiting for another player. We live near Clayton, welcome to play!</div>
        </div>


        <div className='box isNOMr'>
          <img className='isImageT' src={require('../../assets/images/badminton.jpg')} alt="" />
          <div className='gameText'>Sport</div>
          <div className='text fz-24'>Badminton</div>
          <div className='message'>I am a Chinese student looking for a badminton doubles teammate!</div>
        </div>
      </div>
    </div>


  )
}
