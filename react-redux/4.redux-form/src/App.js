import React, { Component } from 'react'
import SimpleForm from './components/1.simple'
import SyncValidationForm from './components/2.sync-validation'
import FieldValidationForm from './components/3.field-validation'
import SubmitValidation from './components/4.submit-validation'
import BlurValidation from './components/5.blur-validation'
import ChangeValidation from './components/6.change-validation'
import Initialize from './components/7.initialize'
import FieldArray from './components/8.field-array'
class App extends Component {
  showResults = values =>
    new Promise(resolve => {
      setTimeout(() => {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        resolve()
      }, 500)
    })

  render() {
    return (
      <div className="App">
        {/* <SimpleForm onSubmit={this.showResults} /> */}
        {/* <SyncValidationForm onSubmit={this.showResults} /> */}
        {/* <FieldValidationForm onSubmit={this.showResults} /> */}
        {/* <SubmitValidation onSubmit={this.showResults} /> */}
        {/* <BlurValidation onSubmit={this.showResults} /> */}
        {/* <ChangeValidation onSubmit={this.showResults} /> */}
        {/* <Initialize onSubmit={this.showResults} /> */}
        <FieldArray onSubmit={this.showResults} />
      </div>
    )
  }
}

export default App
