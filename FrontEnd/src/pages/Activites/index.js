import React, { useEffect, useRef } from 'react'
import { Navigate, NavLink, Outlet, useOutlet } from 'react-router-dom'
import './index.css'
// import { getList } from '../../api/aboutUs'

import ActiveList from '../../components/ActiveList'
export default function Home() {

  const childRef = useRef(); //关键部分


  const [isSelectType] = React.useState([])
  const [allBg, setAllBg] = React.useState(false)
  const [MelbourneBg, setMelbourneBg] = React.useState(false)
  const [RichmondBg, setRichmondBg] = React.useState(false)
  const [PartyBg, setPartyBg] = React.useState(false)
  const [OtherBg, setOtherBg] = React.useState(false)
  const [SportsBg, setSportsBg] = React.useState(false)
  const [RoBg, setRoBg] = React.useState(false)
  const [BoaBg, setBoaBg] = React.useState(false)



  // getList({ init: 'activity' }).then(res => {
  //   console.log(res.data)
  // })
  //   .catch(err => {
  //     console.log(err);
  //   })


  const setCheceKBg = (isCheck) => {
    if (isCheck == 'isAll') {
      setAllBg(!allBg)
    }
    if (isCheck == 'Richmond') {
      setRichmondBg(!RichmondBg)
    }
    if (isCheck == 'Melbourne') {
      setMelbourneBg(!MelbourneBg)
    }
    if (isCheck == 'Party') {
      setPartyBg(!PartyBg)
    }
    if (isCheck == 'Other') {
      setOtherBg(!OtherBg)
    }
    if (isCheck == 'Sports') {
      setSportsBg(!SportsBg)
    }
    if (isCheck == 'Ro') {
      setRoBg(!RoBg)
    }
    if (isCheck == 'Boa') {
      setBoaBg(!BoaBg)
    }


    console.log(isSelectType, isCheck)
    let isClass = isSelectType.includes(isCheck) ? 'isCheck isRound' : 'isRound isGard'
    console.log(typeof (isClass), isClass)
    return isClass
  }

  useEffect(() => {
    console.log(isSelectType);
  }, [isSelectType])


  // 选择
  const isSelect = (checkType) => {
    //  let isResult = [isSelectType,[type]]
    // console.log(isSelectType,type)
    setIsSelectType(isSelectType, checkType)
    setCheceKBg(checkType)

    childRef.current.isfliter(isSelectType)
  }

  const setIsSelectType = (oldArr, isPushitem) => {
    if (!oldArr.includes(isPushitem)) {
      oldArr.push(isPushitem)
    }
    else {
      // oldArr = oldArr.filter(item => {
      //   console.log(item)
      //   return item !== isPushitem
      // })
      oldArr.forEach((item, index) => {
        if (item == isPushitem) {
          oldArr.splice(index, 1)
        }
      })
    }
    // return oldArr

  }


  return (


    <div className='container'>
      {/* 头部 */}
      <div className="header">
        <div className='fiveroundArrBg'></div>
        <div className='sixroundArrBg'></div>
        <div className='left'>
          <div className='fz-64'>Provide our</div>
          <div className='fz-64 mt-40'>best service</div>
          <div className='fz-64 mt-40'>IT solutions</div>
          <div className='mt-31 fz-16'>Bring people together with Gathero.
            It’s easy to join in events you love, gethering palyer and quickly make new friends, build your professional network, or just have some fun.</div>
        </div>
        <img className='header_img' src={require('../../assets/images/pageNo2.png')} />
      </div>

      {/* 搜索区域 */}
      <div className='isSearch'>
        <div className='tip'>Searching activities</div>
        <div className='title fz-48T'>Find events near you</div>
        <div className='isIpt'>
          <input className='ipt' type="text" placeholder='search' />
          <div className='btn'></div>
        </div>
        <div></div>
      </div>
      {/* list 列表加搜索 */}
      <div className='isList' >
        {/* <div className='left'> */}
        {/* {
            list.map(item => {
              <div>{item.sport}</div>
            })
          } */}


        {/* <div className='pageTwoBox'>
            <img className='isImage' src={require('../../assets/images/badminton.jpg')} alt="" />
            <div className='gameText'>FRI, APR 8, 7:30pm</div>
            <div className='text'>Social Practice: Badminton</div>
            <div className='message'>Melbourne</div>
          </div>


          <div className='pageTwoBox'>
            <img className='isImage' src={require('../../assets/images/tableTennis.jpg')} alt="" />
            <div className='gameText'>THU, APR 12, 6:30pm</div>
            <div className='text'>Social Practice: Table tennis</div>
            <div className='message'>Melbourne</div>
          </div>

          <div className='pageTwoBox'>
            <img className='isImage' src={require('../../assets/images/joker.jpg')} alt="" />
            <div className='gameText'>MON, APR 10, 8:00pm</div>
            <div className='text'>Dou dizhu</div>
            <div className='message'>Melbourne</div>
          </div>

          <div className='pageTwoBox'>
            <img className='isImage' src={require('../../assets/images/joker2.jpg')} alt="" />
            <div className='gameText'>THU, APR 12, 6:30pm</div>
            <div className='text'>Monopoly</div>
            <div className='message'>RIchmond</div>
          </div>


          <div className='pageTwoBox'>
            <img className='isImage' src={require('../../assets/images/wtk2.jpg')} alt="" />
            <div className='gameText'>MON, APR 10, 8:00pm</div>
            <div className='text'>Who is the Killer?</div>
            <div className='message'>RIchmond</div>
          </div>
          <div className='pageTwoBox'>
            <img className='isImage' src={require('../../assets/images/mahjong.jpg')} alt="" />
            <div className='gameText'>MON, APR 10, 8:00pm</div>
            <div className='text'>Mahjong -  3 wait for 1!
              URGENT!!!</div>
            <div className='message'>Melbourne</div>
          </div> */}


        {/* </div> */}

        <ActiveList childRef={childRef} />



        <div className="right">

          <div className='isRightTitle mt-62 box'>
            <div>Categories</div>
            <div>
              <div className='mt-44AndRound'>
                <div >All</div>
                {/* <div onClick={() => isSelect('isAll')} className='isRound isGard'></div> */}
                <div className={allBg ? 'isCheck isRound' : 'isRound isGard'} onClick={() => isSelect('isAll')}></div>
              </div>

              <div className='haveChildren'>
                <div className='father'>
                  <div className='mt-44AndRound isMt-21'>
                    <div>game</div>
                    <div className='isRound isGard'></div>
                  </div>
                </div>
                <div className='son'>
                  <div className='mt-44AndRound isMt-21'>
                    <div className='isChildrenText'>Role-play games</div>
                    <div className={RoBg ? 'isCheck isRound' : 'isRound isGard'} onClick={() => isSelect('Ro')}></div>
                  </div>
                  <div className='mt-44AndRound isMt-21'>
                    <div className='isChildrenText'>Boardgames</div>
                    <div className={BoaBg ? 'isCheck isRound' : 'isRound isGard'} onClick={() => isSelect('Boa')}></div>
                  </div>
                </div>
              </div>




              <div className='mt-44AndRound isMt-21'>
                <div>Sports</div>
                <div className={SportsBg ? 'isCheck isRound' : 'isRound isGard'} onClick={() => isSelect('Sports')}></div>
              </div>
              <div className='mt-44AndRound isMt-21'>
                <div>Party</div>
                <div className={PartyBg ? 'isCheck isRound' : 'isRound isGard'} onClick={() => isSelect('Party')}></div>
              </div>
              <div className='mt-44AndRound isMt-21'>
                <div>Other</div>
                <div className={OtherBg ? 'isCheck isRound' : 'isRound isGard'} onClick={() => isSelect('Other')}></div>
              </div>


            </div>


          </div>


          <div className='isRightTitle box  isHaveRoundBg'>
            <div>Location</div>
            <div className='mt-44AndRound'>
              <div>Melbourne</div>
              {/* <div className={({isSelectType})=> {return isSelectType.includes('Melbourne') ? 'isRound' : 'isRound + isGard'}} onClick={() => isSelect('Melbourne')}></div> */}
              {/* <div className={[isSelectType.includes('Melbourne') ? 'isCheck + isRound'  : ' isRound + isGard']} onClick={() => isSelect('Melbourne')}></div> */}
              {/* <div className={`${isSelectType.includes('Melbourne') ? 'isCheck + isRound' : 'isRound + isGard'}`} onClick={() => isSelect('Melbourne')}></div> */}
              {/* <div className={setCheceKBg('Melbourne')} onClick={() => isSelect('Melbourne')}></div> */}
              <div className={MelbourneBg ? 'isCheck isRound' : 'isRound isGard'} onClick={() => isSelect('Melbourne')}></div>

            </div>
            <div className='mt-44AndRound'>
              <div>Richmond</div>
              <div className={RichmondBg ? 'isCheck isRound' : 'isRound isGard'} onClick={() => isSelect('Richmond')}></div>
            </div>
            <div className='sevenroundArrBg'></div>
          </div>



          <div className='isRightTitle mt-62 three setHeight'>
            <div>Time</div>
            <div className='time-box mt-44'>
              <div>Morning</div>
              <div>Afternoon</div>
              <div>Evening</div>
            </div>
          </div>

        </div>
      </div>


      {/* 底部切换分页 */}
      <div className='isPage isHaveRoundBg'>
        <div className='eightroundArrBg'></div>
        <div className='btn isPageText isWhiteText'>1</div>
        {/* <div className='btn isNoBg isPageText'>2</div>
        <div className='nextBtn isNoBg isPageText'>next</div> */}
      </div>


      {/* <Outlet /> */}
    </div>
  )
}
