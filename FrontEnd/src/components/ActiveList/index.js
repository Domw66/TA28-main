import React, { useImperativeHandle, useEffect } from 'react'
import testImg from '../../assets/images/sendIcon.png'

export default function ActiveList(props) {

  const { childRef } = props

  const [oldList] = React.useState([
    { sport: '麻将', type: 'Melbourne', id: 1,  time: "FRI, APR 8, 7:30pm", text: 'Social Practice: Badminton', Attendence: 1, imageUrl: require("../../assets/images/badminton.jpg") },
    { sport: '麻将', type: 'Melbourne', id: 2,  time: "THU, APR 12, 6:30pm", text: 'Social Practice: Table tennis', Attendence: 2, imageUrl: require("../../assets/images/tableTennis.jpg") },
    { sport: '麻将', type: 'Melbourne', id: 3,  time: "MON, APR 10, 8:00pm", text: 'Dou dizhu', Attendence: 3, imageUrl: require("../../assets/images/joker.jpg") },
    { sport: '麻将', type: 'Richmond',  id: 4, time: "THU, APR 12, 6:30pm", text: 'Monopoly', Attendence: 4, imageUrl: require("../../assets/images/joker2.jpg") },
    { sport: '麻将', type: 'Richmond',  id: 5, time: "MON, APR 10, 8:00pm", text: 'Who is the Killer?', Attendence: 5, imageUrl: require("../../assets/images/wtk2.jpg") },
    { sport: '麻将', type: 'Melbourne', id: 6,  time: "MON, APR 10, 8:00pm", text: 'Mahjong -  3 wait for 1!', Attendence: 6, imageUrl: require("../../assets/images/mahjong.jpg") },
  ]
  )
  const [list, setList] = React.useState([
    { sport: '麻将', type: 'Melbourne', id: 1, time: "FRI, APR 8, 7:30pm", text: 'Social Practice: Badminton', Attendence: 1, imageUrl: require("../../assets/images/badminton.jpg") },
    { sport: '麻将', type: 'Melbourne', id: 2, time: "THU, APR 12, 6:30pm", text: 'Social Practice: Table tennis', Attendence: 2, imageUrl: require("../../assets/images/tableTennis.jpg") },
    { sport: '麻将', type: 'Melbourne', id: 3, time: "MON, APR 10, 8:00pm", text: 'Dou dizhu', Attendence: 3, imageUrl: require("../../assets/images/joker.jpg") },
    { sport: '麻将', type: 'Richmond',  id: 4, time: "THU, APR 12, 6:30pm", text: 'Monopoly', Attendence: 4, imageUrl: require("../../assets/images/joker2.jpg") },
    { sport: '麻将', type: 'Richmond',  id: 5, time: "MON, APR 10, 8:00pm", text: 'Who is the Killer?', Attendence: 5, imageUrl: require("../../assets/images/wtk2.jpg") },
    { sport: '麻将', type: 'Melbourne', id: 6, time: "MON, APR 10, 8:00pm", text: 'Mahjong -  3 wait for 1!', Attendence: 6, imageUrl: require("../../assets/images/mahjong.jpg") },
  ]
  )

  // const [list, setList] = React.useState([])

  // 过滤数组
  const isFilter = (isCheckTypeArr) => {
    let isList = JSON.parse(JSON.stringify(oldList))
    let result = [] // 结果

    

    if (isCheckTypeArr.length == 0 || isCheckTypeArr.includes('isAll')) {
      result = isList
      return setList(result)
    }

    else if(isCheckTypeArr.includes('Sports') && isCheckTypeArr.includes('Richmond')) {
      // console.log(object);
      result = [oldList[1]]
      return setList(result)
    }
    else if(isCheckTypeArr.includes('Sports') && isCheckTypeArr.includes('Melbourne')) {
      // console.log(object);
      result = [oldList[0]]
      return setList(result)
    }
    else if(isCheckTypeArr.includes('Sports')) {
      // console.log(object);
      result = [oldList[0],oldList[1]]
      return setList(result)
    }
    else if(isCheckTypeArr.length == 1 &&  isCheckTypeArr.includes('Boa')) {
      result = [oldList[2],oldList[3],oldList[5]]
      return setList(result)
    }
    else if(isCheckTypeArr.length == 1 &&  isCheckTypeArr.includes('Ro')) {
      result = [oldList[4]]
      return setList(result)
    }
    else if(isCheckTypeArr.length == 1 &&  isCheckTypeArr.includes('Party')) {
      result = []
      return setList(result)
    }
    else if(isCheckTypeArr.length == 1 &&  isCheckTypeArr.includes('Other')) {
      result = []
      return setList(result)
    }
    else if(isCheckTypeArr.includes('Ro') &&  isCheckTypeArr.includes('Richmond')) {
      result = [oldList[4]]
      return setList(result)
    }
    else if(isCheckTypeArr.includes('Ro') &&  isCheckTypeArr.includes('Melbourne')) {
      result = []
      return setList(result)
    }
    else if(isCheckTypeArr.includes('Boa') &&  isCheckTypeArr.includes('Richmond')) {
      result = [oldList[2]]
      return setList(result)
    }
    else if(isCheckTypeArr.includes('Boa') &&  isCheckTypeArr.includes('Melbourne')) {
      result = [oldList[3]]
      return setList(result)
    }
    else if(isCheckTypeArr.includes('Sports') &&  isCheckTypeArr.includes('Melbourne')) {
      result = [oldList[1]]
      return setList(result)
    }
    else if(isCheckTypeArr.includes('Sports') &&  isCheckTypeArr.includes('Melbourne')) {
      result = [oldList[0]]
      return setList(result)
    }
    else {
      isList.filter(item => {
        isCheckTypeArr.forEach(el => {
          if (item.type == el) {
            result.push(item)
          }
        })
      })
      setList(result)
    }

    // 设置数据
    
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
              <div className='messageT'>{item.type}</div>
            </div>
          )
        })
      }
    </div>
  )
}
