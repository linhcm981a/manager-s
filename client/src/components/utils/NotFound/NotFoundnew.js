import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {isLength, isMatch} from '../../utils/validation/Validation'
import {showSuccessMsg, showErrMsg} from '../../utils/notification/Notification'
import {fetchAllUsers, dispatchGetAllUsers} from '../../../redux/actions/usersAction'

const initialState = {
    name: '',
    password: '',
    cf_password: '',
    err: '',
    success: '',
    title:''
}

function NotFoundnew() {
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)

    const users = useSelector(state => state.users)

    const {user, isAdmin} = auth
    const [data, setData] = useState(initialState)
    const { title} = data

    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)
    const [callback, setCallback] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if(isAdmin){
            fetchAllUsers(token).then(res =>{
                dispatch(dispatchGetAllUsers(res))
            })
        }
    },[token, isAdmin, dispatch, callback])

    const handleChange = e => {
        const {name ,value} = e.target
        setData({...data, [name]:value, err:'', success: ''})
    }
  

   

    return (
        <>
        
            <div className="col-right">

                <div style={{overflowX: "center"}}>
                    <table className="customers">
                        <thead>
                            <tr>
                               
                                <th >New</th>
                             
                                
                                
                            </tr>
                            <tbody>
        
                                   <tr>
                                  
                                        <td>Bách khoa toàn thư Wikipedia tiếng Việt hiện có 1.267.910 bài viết. Trong số đó, 420 bài có chất lượng tốt đã được các thành viên bình chọn là bài viết chọn lọc. Những bài viết này đạt được các tiêu chuẩn dữ liệu chính xác, nội dung hoàn chỉnh, trung lập... và được xem như những bài nổi bật nhất của Wikipedia tiếng Việt. Tính trung bình, trong 3019 bài viết của Wikipedia, có một bài được chọn lọc. Các bài viết chọn lọc được đánh dấu bằng một ngôi sao màu vàng (Symbol star gold.svg) ở trên cùng góc phải. Tại các phiên bản Wikipedia ngôn ngữ khác, bên cạnh liên kết tới Wikipedia tiếng Việt cũng sẽ có một ngôi sao giúp nhận biết một bài được chọn lọc.</td>

                                        <td>Read</td>
                                        <td>View</td>
                            
                                   </tr>
                                        
                            
                            </tbody>
                         
                         
                        </thead>
            
                    </table>
                </div>
            </div>
      
        </>
    )
}

export default NotFoundnew
