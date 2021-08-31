import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {showSuccessMsg, showErrMsg} from '../../utils/notification/Notification'
import {fetchAllUsers, dispatchGetAllUsers} from '../../../redux/actions/usersAction'

const initialState = {
    name: '',
    password: '',
    cf_password: '',
    err: '',
    success: '',
    title: '',
    description: '',
}

function Detail() {
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)

    const users = useSelector(state => state.users)

    const {user, isAdmin} = auth
    const [data, setData] = useState(initialState)
    const {name, err, success, title , description} = data

    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)
    const [callback] = useState(false)

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
  


    const changeAvatar = async(e) => {
        e.preventDefault()
        try {
            const file = e.target.files[0]

            if(!file) return setData({...data, err: "No files were uploaded." , success: ''})

            if(file.size > 1024 * 1024)
                return setData({...data, err: "Size too large." , success: ''})

            if(file.type !== 'image/jpeg' && file.type !== 'image/png')
                return setData({...data, err: "File format is incorrect." , success: ''})

            let formData =  new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload_avatar', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })

            setLoading(false)
            setAvatar(res.data.url)
            
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const updateInfor = () => {
        try {
            axios.patch('/user/update', {
                name: name ? name : user.name,
                avatar: avatar ? avatar : user.avatar,
                title: title ? title : user.title,
                description: description ? description : user.description,
            },{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Updated Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const handleUpdate = () => {
        if(name || avatar || title || description) updateInfor()
    
    }

    return (
        <>
        <div>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            {loading && <h3>Loading.....</h3>}
        </div>
        <div className="profile_page1">
            <div className="col-left1">
                <h2>{isAdmin ? "Admin Profile": "User Profile"}</h2>

                <div className="avatar1">
                    <img src={avatar ? avatar : user.avatar} alt=""/>
                    <span>
                        <i className="fas fa-camera1"></i>
                        <p>Change</p>
                        <input type="file" name="file" id="file_up" onChange={changeAvatar} />
                    </span>
                </div>

                <div className="form-group1">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" defaultValue={user.name}
                    placeholder="Your name" disabled />
                </div>

                <div className="form-group1">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" defaultValue={user.email}
                    placeholder="Your email address" disabled />
                </div>
                <div className="form-group1">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" defaultValue={user.title}
                    placeholder="Your title" onChange={handleChange} />
                </div>
                <div className="form-group1">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" defaultValue={user.description}
                    placeholder="Your description" onChange={handleChange} />
                </div>
              

                <button disabled={loading} onClick={handleUpdate}>Update</button>
            </div>

            <div className="col-right1">
                <h2>{isAdmin ? "Users" : "My Orders"}</h2>

                <div style={{overflowX: "auto"}}>
                    <table className="customers1">
                        <thead>
                            <tr>
                         
                                <th>Name</th>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => (
                                    <tr key={user._id}>
                                      
                                        <td>{user.name}</td>
                                        <td>{user.title}</td>
                                        <td>{user.description}</td>
                                       
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default Detail
