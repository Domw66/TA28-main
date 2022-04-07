import React from 'react'
import { useNavigate, NavLink, Outlet, useOutlet } from 'react-router-dom'
// import Header from '../../components/Header'
import Sport from '../../components/Sport'
import RoundArrBg from '../../components/RoundArrBg'
import './index.css'


export default function Home() {

  const navigate = useNavigate()
   const goActivites = ()=>{
    navigate('/activites')
  }

  console.log('@@@', useOutlet())
  const [sum, setSum] = React.useState(1)
  return (
    <div className='container'>
      {/* 头部 */}
      {/* <Header /> */}
      {/* 内容 */}
      <div className='isMain'>
      <div className='oneroundArrBg'></div>
      <div className='tworoundArrBg'></div>
        <div className='isImg'></div>
        <div className='isRight'>
          <div>
            <h1 className='fz-48'>Connections with</h1>
            <h1 className='mt-40 fz-48'>Chinese International</h1>
            <h1 className='mt-40 fz-48'>students</h1>
            <div className='mt-40 mt-40Text'>Whatever you're looking for, Gathero can help. Don't worry about you could not finding the Chinese culture activities in Australia. Chinese international student use Gathero to meet new people, make friends, find support, connect with communities in  Chinese cultrue area. .</div>
          </div>

          <div className='isRight_btn'>start your journy</div>
          <div className='isGreenBox'></div>
        </div>
        <div className='isOneRoundArr'></div>
      </div>
      {/* 中间部分 */}
      <div className='isCenter'>
      <div className='threeroundArrBg'></div>
        {/* 中间左侧 */}
        <div className="isCenter_left">
          <div>Different Activities</div>
          <h1 className='fz-48'>Still worried</h1>
          <h1 className='mt-30 fz-48'>about gathering</h1>
          <h1 className='mt-30'>friends ?</h1>
          <div className='mt-32Text fz-16 colorBlack'>
            Want to play table tennis but have no partner? Want to play mahjong but can't get anyone together? It doesn't matter, our platform will give you chance to gather people! Whether you want to organize or participate, you can find what you are looking for.
          </div>
          <div className='isBtn' onClick={goActivites}>Join now!</div>
          {/* <NavLink className='isBtn' to="/activites">Join now!</NavLink> */}
        </div>

        {/* 中间右侧 */}
        <div className='isCenter_right'>
          {/* 右侧的左侧部分 */}
          <div className='isCenter_right_leftItem'>
            <div className='isCenter_right_item bgShadow'>
              <img className='isIcon isNoMt' src={require("../../assets/images/leftone.png")} />
              <h2 className='mt-32 fz-24'>ExerCises</h2>
              <div className='mt-30Text fz-16 colorBlack'>Basketball, badminton, table tennis, even if you just wanna someone for a morning jog, you'll find a partner with us.</div>
            </div>
            <div className='isCenter_right_item'>
              <img className='isIcon isNoMt' src={require("../../assets/images/lefttwo.png")} />
              <h2 className='mt-32 fz-24'>Parties</h2>
              <div className='mt-30Text fz-16 colorBlack'>Inviting someone to a gourmet dinner, petting others cat or dog? Or have a birthday party! Get involved now.</div>
            </div>
          </div>
          {/* 中间的右侧的右侧部分 */}
          <div className='isCenter_right_rightItem '>
            <div className='isCenter_right_item isCenter_right_itemR'>
              <img className='isIcon isNoMt' src={require("../../assets/images/rightone.png")} />
              <h2 className='mt-32 fz-24'>Board Games</h2>
              <div className='mt-30Text fz-16 colorBlack'>Wanna play Mahjong but always missing one person, wanna play Mystery murder game but always not enough players? Why don't you try calling it on our platform?</div>
            </div>
            <div className='isCenter_right_item'>
              <img className='isIcon isNoMt' src={require("../../assets/images/righttwo.png")} />
              <h2 className='mt-32 fz-24 colorBlack'>More...</h2>
              <div className='mt-30Text fz-16'>Anything is possible as long as you need someone to be with you.</div>
            </div>
          </div>


        </div>
      </div>

      {/* 登录部分 */}

      <div className='isLogin'>
        <div className='isLogin-left'>
          <div className='isTitle'>Login</div>
          <div className='isTip'>You can read our news letter and get free knowledge</div>
        </div>
        <div className='isLogin-right'>
          <div className='isName isIptSize'>
            <div>Username</div>
            <input className='isIpt' type="text" placeholder='Input your username' />
          </div>
          <div className='isName isIptSize'>
            <div>Password</div>
            <input className='isIpt' type="text" placeholder='Input your password' />
          </div>

          <div className='mt-26'>Dont't have an account ? Sign up</div>

          <div className='loginFotter'>
            <div></div>
            <div className='isLoginBtn'>login</div>
          </div>

        </div>

        <div className='fourroundArrBg'></div>

      </div>

      {/* 注册 */}
      {/* <div className='isLogin isCreate'>
        <div className='isLogin-left'>
          <div className='isTitle'>Create account</div>
          <div className='isTip isCreateTip'>Make new friends, gather around hobbies you love, or just have some fun.</div>
        </div>
        <div className='isLogin-right'>
          <div className='isName isIptSize'>
            <div>Username</div>
            <input className='isIpt' type="text" placeholder='Input your username' />
          </div>
          <div className='isName isIptSize'>
            <div>Password</div>
            <input className='isIpt' type="text" placeholder='Input your password' />
          </div>
          <div className='isName isIptSize'>
            <div>Email adress（optional）</div>
            <input className='isIpt' type="text" placeholder='Input your email address' />
          </div>


          <div className='loginFotter'>
            <div></div>
            <div className='isLoginBtn isLoginBtnT'>Create account</div>
          </div>

        </div>

      </div> */}

      {/* 登陆后的 */}
      {/* <div className='isLogin isLoginAfter isLoginAfterFaceBox'>
        <div className='isLogin-left isLoginAfter-left'>
          <div className='isLoginAfterImg' style={{ background: `url(${require("../../assets/images/test.png")})` }}></div>
        </div>
        <div className='isLogin-right'>
          <div className='isNameT'>
            <div className='loginAfterName'>welcome UserName!</div>
            <div className='loginAfter'>Meet your friends right now!</div>
            <div className='isLoginBtn isLoginAfterBtn'>Join now!</div>

          </div>
        </div>

      </div> */}


      {/* activities on going 部分*/}
      <div className='isWaiting'>
        <div className="left">
          <div className='title'>ACTIBITIES ON GOING</div>
          <div className='isWaitingText'>Waiting for you to join</div>
          <div className='tip'>Find your favorite activities, come out and join us! You can also be an organizer and initiate the event you want!</div>
        </div>
      </div>


      {/* 活动*/}
      <Sport />
      {/* <Outlet /> */}

    </div>
  )
}
