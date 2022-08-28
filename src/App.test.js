import {render, screen} from '@testing-library/react'
import {App} from "./App"
import {store} from "./redux/store"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import {SignInPage} from "./pages/SignInPage"
import userEvent from "@testing-library/user-event";

describe('First open site', () => {
    it('Redirects to sign in page', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        )
        const text = screen.getByRole('heading')
        expect(text).toBeInTheDocument()
    })

    it('Sign in page renders form', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <App>
                        <SignInPage/>
                    </App>
                </BrowserRouter>
            </Provider>
        )
        const emailInput = screen.getByLabelText(/Email address/i)
        expect(emailInput).toBeInTheDocument()

        const passwordInput = screen.getByLabelText(/Password/i)
        expect(passwordInput).toBeInTheDocument()

        const submitBtn = screen.getByRole('button')
        expect(submitBtn).toBeInTheDocument()

        const link = screen.getByText(/Join us!/i)
        expect(link).toBeInTheDocument()
    })

    it('Goes to sign up', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <App>
                        <SignInPage/>
                    </App>
                </BrowserRouter>
            </Provider>
        )
        const link = screen.getByText(/Join us!/i)
        userEvent.click(link)

        const text = screen.getByText('Sign up for free!')
        expect(text).toBeInTheDocument()
    })
})

