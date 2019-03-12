/*
  字段验证：统一验证不能复用，修改起来也麻烦。
 */

import React from 'react'
import { Field, reduxForm } from 'redux-form'

const required = value =>
  value || typeof value === 'number' ? undefined : '必填'
const maxLength = max => value =>
  value && value.length > max ? `必须在 ${max} 个字符以下` : undefined
const maxLength15 = maxLength(15)

const minLength = min => value =>
  value && value.length < min ? `至少需要包含 ${min} 个字符` : undefined
const minLength2 = minLength(2)
const number = value =>
  value && isNaN(Number(value)) ? '必须是数字' : undefined
const minValue = min => value =>
  value && value < min ? `不能少于 ${min}` : undefined
const minValue13 = minValue(13)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? '无效的邮箱地址'
    : undefined
const tooYoung = value => (value && value < 13 ? '年龄不符合要求!' : undefined)
const qq = value =>
  value && /.+@qq\.com/.test(value) ? '天哪，你竟然还在用qq邮箱？' : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? '只能包含字母和数字' : undefined
const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? '无效的电话号码，必须是10位数字'
    : undefined

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

const FieldLevelValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="用户名"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="邮箱"
        validate={email}
        warn={qq}
      />
      <Field
        name="age"
        type="number"
        component={renderField}
        label="年龄"
        validate={[required, number, minValue13]}
        warn={tooYoung}
      />
      <Field
        name="phone"
        type="number"
        component={renderField}
        label="电话号码"
        validate={[required, phoneNumber]}
      />
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
  form: 'fieldLevelValidation'
})(FieldLevelValidationForm)
