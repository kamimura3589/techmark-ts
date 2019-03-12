import React from 'react'
import {Formik, FormikProps, Form, Field, FieldProps} from 'formik'

interface MyFormValues {
	email: string
	password: string
}

const Register: React.SFC<{}> = () => {
	return (
		<div>
			<h1>新規登録</h1>
			<Formik
				initialValues={{email: '', password: ''}}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2))
						actions.setSubmitting(false)
					}, 1000)
				}}
				render={props => (
					<form onSubmit={props.handleSubmit}>
						<input
							type="text"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							value={props.values.email}
							name="email"
							placeholder="メールアドレス"
						/>
						{props.errors.email && <div id="feedback">{props.errors.email}</div>}
						<input
							type="password"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							value={props.values.password}
							name="passwo"
							placeholder="パスワード"
						/>
						<button type="submit">新規登録</button>
					</form>
				)}
			/>
		</div>
	)
}

export default Register
