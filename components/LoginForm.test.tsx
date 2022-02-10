import LoginForm from "./LoginForm"
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('shows validation when email is invalid', ()=>{
    render(<LoginForm/>)
    userEvent.type(screen.getByPlaceholderText('email'), "test")
    userEvent.click(screen.getByText('Login') )
    
    expect(screen.getByText('Email not valid')).toBeInTheDocument()
})
// test('shows validation when password is invalid', () => {
//     render(<LoginForm/>)
//     userEvent.type(screen.getByPlaceholderText('password'), "test")
//     userEvent.click(screen.getByText('Login') )
    
//     expect(screen.getByText('Email not valid')).toBeInTheDocument()
// })
test('does not allow to submit form when email is empty', () => {
    render(<LoginForm/>)
    userEvent.type(screen.getByPlaceholderText('email'), "test")
    userEvent.click(screen.getByText('Login') )
    
    expect(screen.getByText('Email not valid')).toBeInTheDocument()
})
test.todo('does not allow to submit form when password is empty')
test.todo('calls #onLoginClick when password and email are valid and user clicks the submit form "login" button')