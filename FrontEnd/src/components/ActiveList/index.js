import React, { useImperativeHandle, useEffect } from 'react'
import testImg from '../../assets/images/sendIcon.png'

export default function ActiveList(props) {

  const { childRef } = props

  const [oldList] = React.useState([
    { sport: '麻将', type: 'Melbourne', time: "FRI, APR 8, 7:30pm", text: 'Social Practice: Badminton', Attendence: 1, imageUrl: require("../../assets/images/badminton.jpg")},
    { sport: '麻将', type: 'Melbourne', time: "THU, APR 12, 6:30pm", text: 'Social Practice: Table tennis', Attendence: 2, imageUrl: require("../../assets/images/tableTennis.jpg")},
    { sport: '麻将', type: 'Melbourne', time: "MON, APR 10, 8:00pm", text: 'Dou dizhu', Attendence: 3, imageUrl: require("../../assets/images/joker.jpg")},
    { sport: '麻将', type: 'Richmond', time: "THU, APR 12, 6:30pm", text: 'Monopoly', Attendence: 4, imageUrl: require("../../assets/images/joker2.jpg")},
    { sport: '麻将', type: 'Richmond', time: "MON, APR 10, 8:00pm", text: 'Who is the Killer?', Attendence: 5, imageUrl: require("../../assets/images/wtk2.jpg")},
    { sport: '麻将', type: 'Melbourne', time: "MON, APR 10, 8:00pm", text: 'Mahjong -  3 wait for 1!', Attendence: 6, imageUrl: require("../../assets/images/mahjong.jpg")},
  ]
  )
  const [list,setList] = React.useState([
    { sport: '麻将', type: 'Melbourne', time: "FRI, APR 8, 7:30pm", text: 'Social Practice: Badminton', Attendence: 1, imageUrl: require("../../assets/images/badminton.jpg")},
    { sport: '麻将', type: 'Melbourne', time: "THU, APR 12, 6:30pm", text: 'Social Practice: Table tennis', Attendence: 2, imageUrl: require("../../assets/images/tableTennis.jpg")},
    { sport: '麻将', type: 'Melbourne', time: "MON, APR 10, 8:00pm", text: 'Dou dizhu', Attendence: 3, imageUrl: require("../../assets/images/joker.jpg")},
    { sport: '麻将', type: 'Richmond', time: "THU, APR 12, 6:30pm", text: 'Monopoly', Attendence: 4, imageUrl: require("../../assets/images/joker2.jpg")},
    { sport: '麻将', type: 'Richmond', time: "MON, APR 10, 8:00pm", text: 'Who is the Killer?', Attendence: 5, imageUrl: require("../../assets/images/wtk2.jpg")},
    { sport: '麻将', type: 'Melbourne', time: "MON, APR 10, 8:00pm", text: 'Mahjong -  3 wait for 1!', Attendence: 6, imageUrl: require("../../assets/images/mahjong.jpg")},
  ]
  )

  // const [list, setList] = React.useState([])

  // 过滤数组
  const isFilter = (isCheckTypeArr) => {
    let isList = JSON.parse(JSON.stringify(oldList))
    let result = [] // 结果
    if (isCheckTypeArr.length == 0 || isCheckTypeArr.includes('isAll')) {
      result = isList
    }
    else {
      isList.filter(item => {
        isCheckTypeArr.forEach(el => {
          if (item.type == el) {
            result.push(item)
          }
        })
      })
    }

    // 设置数据
    setList(result)
  }



  useImperativeHandle(childRef, () => ({
    // isfliter 就是暴露给父组件的方法
    isfliter: newVal => {
      isFilter(newVal)
    },
  }));


  useEffect(() => {
    console.log('list过滤后的数据', list)
  }, [list])





  return (
    <div className='left'>
      {
        list.map((item) => {
          return (
            <div className='pageTwoBox' key={item.Attendence}>
              <img className='isImage' src={item.imageUrl} alt="" />
              <div className='gameText'>{item.time}</div>
              <div className='text'>{item.text}</div>
              <div className='message'>{item.type}</div>
            </div>
          )
        })
      }
    </div>
  )
}
