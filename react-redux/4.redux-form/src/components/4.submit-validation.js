/*
  后端验证：SubmissionError 对象用来收集后端验证错误信息。
  this.props.handleSubmit
  表单级别的错误用 _error 表示.
 */

import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  // 模拟服务器延时
  return sleep(1000).then(() => {
    if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw new SubmissionError({
        username: '用户不存在',
        _error: '登录失败!'
      })
    } else if (values.password !== 'redux-form') {
      throw new SubmissionError({
        password: '密码错误',
        _error: '登录失败!'
      })
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  })
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const SubmitValidationForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="用户名"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="密码"
      />
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>
          登录
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          重置
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'submitValidation'
})(SubmitValidationForm)
