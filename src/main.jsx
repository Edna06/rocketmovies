
import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from 'styled-components'
import { ToastContainer} from 'react-toastify';

import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { AuthProvider } from './Hook/auth'

import {Routes} from './routes/index'

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
    <ToastContainer theme='dark' autoClose={2500}/>
      <GlobalStyles/>
      <AuthProvider>
       <Routes />
      </AuthProvider>

    </ThemeProvider>
  </React.StrictMode>
)
