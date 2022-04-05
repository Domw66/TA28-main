import React from 'react'
import { Navigate, NavLink, Outlet, useOutlet } from 'react-router-dom'
// import Header from '../../components/Header'
import ViewPhoto from '../../components/viewPhoto'
import './index.css'


export default function Home() {
  console.log('@@@', useOutlet())
  const [sum, setSum] = React.useState(1)
  return (
    <div className='container'>
      {/* 头部 */}
      {/* <Header /> */}
      {/* 内容 */}
      <div className='isMain'>
        <div className='isImg' style={{ background: `url(${require("../../assets/images/main_left.jpg")})` }}></div>

        <div className='isRight'>
          <div>
            <h1>Connections with</h1>
            <h1 className='mt-40'>Chinese International</h1>
            <h1 className='mt-40'>students</h1>
            <div className='mt-40'>Whatever you are looking for,
              Gathero can help,ont,worry about you could not finding
              the chinese cluture activeties inAustralia,cinese
              international student use Gathero to meet new people make friends,find support connect with communities in Chinese cultrue area</div>
          </div>

          <div className='isRight_btn'>start your journy</div>
          <div className='isGreenBox'></div>
        </div>
      </div>
      {/* 中间部分 */}
      <div className='isCenter'>
        {/* 中间左侧 */}
        <div className="isCenter_left">
          <div>Different Activities</div>
          <h1 className='mt-26'>Still worried</h1>
          <h1 className='mt-30'>about gathering</h1>
          <h1 className='mt-30'>friends ?</h1>
          <div className='mt-32Text'>
            Want to play table tennis but have no partner? Want to play mahjong but cant get anynoe together? it doesnt matter our platform will give you chance to gather people! Whether you want to organize or participate,you can find what you are looling for.
          </div>
          <div className='isBtn'>Join now!</div>
        </div>

        {/* 中间右侧 */}
        <div className='isCenter_right'>
          {/* 右侧的左侧部分 */}
          <div className='isCenter_right_leftItem'>
            <div className='isCenter_right_item isBgWhite'>
              <div className='isIcon' style={{ background: `url(${require("../../assets/images/test.jpg")})` }} />
              <h2 className='mt-32'>Exercises</h2>
              <div className='mt-30Text'>Basketball, badminton, table tennis, even if you just wanna someone for a morning jog, you'll find a partner with us.</div>
            </div>
            <div className='isCenter_right_item'>
              <div className='isIcon' style={{ background: `url(${require("../../assets/images/test.jpg")})` }} />
              <h2 className='mt-32'>Parties</h2>
              <div className='mt-30Text'>Inviting someone to a gourmet dinner, petting others cat or dog? Or have a birthday party! Get involved now.</div>
            </div>
          </div>
          {/* 中间的右侧的右侧部分 */}
          <div className='isCenter_right_rightItem '>
            <div className='isCenter_right_item isCenter_right_itemR'>
              <div className='isIcon isNoMt' style={{ background: `url(${require("../../assets/images/test.jpg")})` }} />
              <h2 className='mt-32'>Board Games</h2>
              <div className='mt-30Text'>Wanna play Mahjong but always missing one person, wanna play Mystery murder game but always not enough players? Why don't you try calling it on our platform?</div>
            </div>
            <div className='isCenter_right_item'>
              <div className='isIcon isNoMt' style={{ background: `url(${require("../../assets/images/test.jpg")})` }} />
              <h2 className='mt-32'>More...</h2>
              <div className='mt-30Text'>Anything is possible as long as you need someone to be with you.</div>
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
          <div className='isName'>
            <div>Username</div>
            <input className='isIpt' type="text" placeholder='Input your username' />
          </div>
          <div className='isName'>
            <div>Password</div>
            <input className='isIpt' type="text" placeholder='Input your password' />
          </div>

          <div className='mt-26'>Dont't have an account ? Sign up</div>

          <div className='loginFotter'>
            <div></div>
            <div className='isLoginBtn'>login</div>
          </div>

        </div>

      </div>

      {/* 注册 */}
      <div className='isLogin'>
        <div className='isLogin-left'>
          <div className='isTitle'>Create account</div>
          <div className='isTip'>Make new friends gather around hobbies you love,or just have some fun</div>
        </div>
        <div className='isLogin-right'>
          <div className='isName'>
            <div>Username</div>
            <input className='isIpt' type="text" placeholder='Input your username' />
          </div>
          <div className='isName'>
            <div>Password</div>
            <input className='isIpt' type="text" placeholder='Input your password' />
          </div>
          <div className='isName'>
            <div>Email adress（optional）</div>
            <input className='isIpt' type="text" placeholder='Input your email address' />
          </div>

          
          <div className='loginFotter'>
            <div></div>
            <div className='isLoginBtn isLoginBtnT'>Create account</div>
          </div>

        </div>

      </div>
      {/* 登陆后的 */}
      <div className='isLogin'>
        <div className='isLogin-left'>
          <div className='isLoginAfterImg' style={{ background: `url(${require("../../assets/images/test.jpg")})` }}></div>
        </div>
        <div className='isLogin-right'>
          <div className='isNameT'>
            <div className='loginAfterName'>welcome UserName!</div>
            <div className='loginAfter'>Meet your friends right now!</div>
            <div className='isLoginBtn'>Join now!</div>

          </div>
        </div>

      </div>


      {/* activities on going 部分*/}
      <div className='isWaiting'>
        <div className="left">
          <div className='title'>ACTIBITIES ON GOING</div>
          <div className='isWaitingText'>Waiting for you to join</div>
          <div className='tip'>Find your favorite actibities,come out and join us! You can also be an organizer and initiate the event you want</div>
        </div>
        <div className="right">
          <div></div>
          <div className='isBtn'>
            <div className='Btn'>＜-</div>
            <div className='Btn isActiveT'>-＞</div>
          </div>
        </div>

      </div>


      {/* 图片部分 */}
      <ViewPhoto />

      {/* 底部 */}
      <div className="footer">
        <div className='one mr-138'>
          <dl>
            <dt className='mt-38'>Your Account</dt>
            <dt className='mt-38'>Login</dt>
            <dt className='mt-38'>Siginup</dt>
            <dt className='mt-38'>Help</dt>
          </dl>
        </div>
        <div className='two mr-138'>
          <dl>
            <dt className='mt-38'>Company</dt>
            <dt className='mt-38'>Monash University</dt>
            <dt className='mt-38'>Contact Us</dt>
          </dl>
        </div>
        <div className='three'>
          <dl className='footer_btn'>
            <dt className='mt-38'>Our Website Designer</dt>
            <div className='btnArr mt-38'>
              <div className='ft_btn'>YW</div>
              <div className='ft_btn'>YL</div>
              <div className='ft_btn'>YX</div>
              <div className='ft_btn'>DW</div>
              <div className='ft_btn'>AP</div>
            </div>
          </dl>
        </div>


      </div>


      {/* <Outlet /> */}

    </div>
  )
}
