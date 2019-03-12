import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { LOAD } from '../constants/action-types'
const loadAccount = data => ({ type: LOAD, data })

const data = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: '42',
  anniversaryDate: '2018-08-22',
  sex: '女',
  employed: true,
  favoriteColor: 'Blue',
  bio: 'Born to write amazing Redux code.'
}
const colors = ['红色', '橙色', '黄色', '绿色', '蓝色', '靛蓝', '紫色']

let InitializeFromStateForm = props => {
  const { handleSubmit, load, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="button" onClick={() => load(data)}>
          加载账户
        </button>
      </div>
      <div>
        <label>名</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>姓</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>年龄</label>
        <div>
          <Field name="age" component="input" type="number" placeholder="Age" />
        </div>
      </div>
      <div>
        <label>纪念日</label>
        <div>
          <Field name="anniversaryDate" component="input" type="date" />
        </div>
      </div>
      <div>
        <label>性别</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="男" /> 男
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="女" /> 女
          </label>
        </div>
      </div>
      <div>
        <label>颜色偏好</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option value="">请选择一种颜色...</option>
            {colors.map(colorOption => (
              <option value={colorOption} key={colorOption}>
                {colorOption}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">在职状态</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>简介</label>
        <div>
          <Field name="bio" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          提交
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          重置
        </button>
      </div>
    </form>
  )
}

InitializeFromStateForm = reduxForm({
  form: 'initializeFromState'
})(InitializeFromStateForm)

// 使用 connect() 关联到 reducer
InitializeFromStateForm = connect(
  state => ({
    initialValues: state.account.data // 初始值
  }),
  { load: loadAccount } // 绑定账户加载函数
)(InitializeFromStateForm)

export default InitializeFromStateForm
