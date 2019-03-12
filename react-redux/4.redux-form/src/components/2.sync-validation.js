/*
  统一验证：将所有表单元素的验证写在一个validate函数，这个函数返回一个错误对象errors
  validate 不符合条件无法提交表单
  warn 警告不阻止表单提交，只给出提示
 */

import React from 'react'
import { Field, reduxForm } from 'redux-form'

/*
  错误提示
  用一个函数来验证表单中的所有字段
 */
const validate = values => {
  const errors = {}
  // 验证用户名
  if (!values.username) {
    errors.username = '必填'
  } else if (values.username.length > 15) {
    errors.username = '必须在15个字符以内'
  }
  // 验证邮箱
  if (!values.email) {
    errors.email = '必填'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '无效的邮箱地址'
  }
  // 验证年龄
  if (!values.age) {
    errors.age = '必填'
  } else if (isNaN(Number(values.age))) {
    errors.age = '必须是数字'
  } else if (Number(values.age) < 18) {
    errors.age = '年龄要在18周岁以上'
  }
  return errors
}

/*
  警告消息
  用一个函数来验证所有字段
 */
const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = '少年, 年纪有点儿轻啊...'
  }
  return warnings
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="姓名"
      />
      <Field name="email" type="email" component={renderField} label="邮箱" />
      <Field name="age" type="number" component={renderField} label="年龄" />
      <div>
        <button type="submit" disabled={submitting}>
          提交
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          重置
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation', // 唯一识别标识
  validate, // 错误提示验证器
  warn // 警告消息验证器
})(SyncValidationForm)
