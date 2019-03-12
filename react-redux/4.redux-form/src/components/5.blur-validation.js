import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = '必填'
  }
  if (!values.password) {
    errors.password = '必填'
  }
  return errors
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    // 模拟服务器延迟
    if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw { username: '用户名已被占用' }
    }
  })
}
const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const AsyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
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
      <div>
        <button type="submit" disabled={submitting}>
          注册
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          重置
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'asyncValidation',
  validate,
  asyncValidate,
  asyncBlurFields: ['username']
})(AsyncValidationForm)
