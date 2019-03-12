import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.clubName) {
    errors.clubName = 'Required'
  }
  if (!values.members || !values.members.length) {
    errors.members = { _error: 'At least one member must be entered' }
  } else {
    const membersArrayErrors = []
    values.members.forEach((member, memberIndex) => {
      const memberErrors = {}
      if (!member || !member.firstName) {
        memberErrors.firstName = 'Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.lastName) {
        memberErrors.lastName = 'Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (member && member.hobbies && member.hobbies.length) {
        const hobbyArrayErrors = []
        member.hobbies.forEach((hobby, hobbyIndex) => {
          if (!hobby || !hobby.length) {
            hobbyArrayErrors[hobbyIndex] = 'Required'
          }
        })
        if (hobbyArrayErrors.length) {
          memberErrors.hobbies = hobbyArrayErrors
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (member.hobbies.length > 5) {
          if (!memberErrors.hobbies) {
            memberErrors.hobbies = []
          }
          memberErrors.hobbies._error = 'No more than five hobbies allowed'
          membersArrayErrors[memberIndex] = memberErrors
        }
      }
    })
    if (membersArrayErrors.length) {
      errors.members = membersArrayErrors
    }
  }
  return errors
}

// 渲染表单项目
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

// 渲染爱好
const renderHobbies = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        添加兴趣爱好
      </button>
    </li>
    {fields.map((hobby, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Hobby"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={hobby}
          type="text"
          component={renderField}
          label={`爱好 #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
)
// 渲染成员列表
const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>
        添加成员
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {fields.map((member, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        />
        <h4>成员 #{index + 1}</h4>
        <Field
          name={`${member}.firstName`}
          type="text"
          component={renderField}
          label="名称"
        />
        <Field
          name={`${member}.lastName`}
          type="text"
          component={renderField}
          label="姓氏"
        />
        <FieldArray name={`${member}.hobbies`} component={renderHobbies} />
      </li>
    ))}
  </ul>
)

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="clubName"
        type="text"
        component={renderField}
        label="俱乐部名称"
      />
      <FieldArray name="members" component={renderMembers} />
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
  form: 'fieldArrays',
  validate
})(FieldArraysForm)
