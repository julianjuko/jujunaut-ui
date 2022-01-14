import { createGlobalStyle } from 'styled-components'

import { spacer } from '../constants/style'

const Manrope = require('./static/fonts/Manrope.woff2')

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    src: url(${Manrope}) format('woff2');
  }

  html {
    font-family: 'Manrope', 'Helvetica', sans-serif;
    font-size: 100%;
  }

  body {
    font-size: 1rem;
    line-height: 1rem;
    font-family: 'Manrope', 'Helvetica', sans-serif;
  } 

  * {
    font-size: 1rem;
    line-height: 1rem;
    font-family: 'Manrope', 'Helvetica', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .mt-0 {
    margin-top: 0 !important;
  }

  .mr-0 {
    margin-right: 0 !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .ml-0 {
    margin-left: 0 !important;
  }

  .mx-0 {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .m-0 {
    margin-top: 0 !important;
    margin-right: 0 !important;
    margin-bottom: 0 !important;
    margin-left: 0 !important;
  }

  .mt-1 {
    margin-top: ${0.25 * spacer}px !important;
  }

  .mr-1 {
    margin-right: ${0.25 * spacer}px !important;
  }

  .mb-1 {
    margin-bottom: ${0.25 * spacer}px !important;
  }

  .ml-1 {
    margin-left: ${0.25 * spacer}px !important;
  }

  .mx-1 {
    margin-left: ${0.25 * spacer}px !important;
    margin-right: ${0.25 * spacer}px !important;
  }

  .my-1 {
    margin-top: ${0.25 * spacer}px !important;
    margin-bottom: ${0.25 * spacer}px !important;
  }

  .m-1 {
    margin-top: ${0.25 * spacer}px !important;
    margin-right: ${0.25 * spacer}px !important;
    margin-bottom: ${0.25 * spacer}px !important;
    margin-left: ${0.25 * spacer}px !important;
  }

  .mt-2 {
    margin-top: ${0.5 * spacer}px !important;
  }

  .mr-2 {
    margin-right: ${0.5 * spacer}px !important;
  }

  .mb-2 {
    margin-bottom: ${0.5 * spacer}px !important;
  }

  .ml-2 {
    margin-left: ${0.5 * spacer}px !important;
  }

  .mx-2 {
    margin-left: ${0.5 * spacer}px !important;
    margin-right: ${0.5 * spacer}px !important;
  }

  .my-2 {
    margin-top: ${0.5 * spacer}px !important;
    margin-bottom: ${0.5 * spacer}px !important;
  }

  .m-2 {
    margin-top: ${0.5 * spacer}px !important;
    margin-right: ${0.5 * spacer}px !important;
    margin-bottom: ${0.5 * spacer}px !important;
    margin-left: ${0.5 * spacer}px !important;
  }

  .mt-3 {
    margin-top: ${1 * spacer}px !important;
  }

  .mr-3 {
    margin-right: ${1 * spacer}px !important;
  }

  .mb-3 {
    margin-bottom: ${1 * spacer}px !important;
  }

  .ml-3 {
    margin-left: ${1 * spacer}px !important;
  }

  .mx-3 {
    margin-left: ${1 * spacer}px !important;
    margin-right: ${1 * spacer}px !important;
  }

  .my-3 {
    margin-top: ${1 * spacer}px !important;
    margin-bottom: ${1 * spacer}px !important;
  }

  .m-3 {
    margin-top: ${1 * spacer}px !important;
    margin-right: ${1 * spacer}px !important;
    margin-bottom: ${1 * spacer}px !important;
    margin-left: ${1 * spacer}px !important;
  }

  .mt-4 {
    margin-top: ${1.5 * spacer}px !important;
  }

  .mr-4 {
    margin-right: ${1.5 * spacer}px !important;
  }

  .mb-4 {
    margin-bottom: ${1.5 * spacer}px !important;
  }

  .ml-4 {
    margin-left: ${1.5 * spacer}px !important;
  }

  .mx-4 {
    margin-left: ${1.5 * spacer}px !important;
    margin-right: ${1.5 * spacer}px !important;
  }

  .my-4 {
    margin-top: ${1.5 * spacer}px !important;
    margin-bottom: ${1.5 * spacer}px !important;
  }

  .m-4 {
    margin-top: ${1.5 * spacer}px !important;
    margin-right: ${1.5 * spacer}px !important;
    margin-bottom: ${1.5 * spacer}px !important;
    margin-left: ${1.5 * spacer}px !important;
  }

  .mt-5 {
    margin-top: ${3 * spacer}px !important;
  }

  .mr-5 {
    margin-right: ${3 * spacer}px !important;
  }

  .mb-5 {
    margin-bottom: ${3 * spacer}px !important;
  }

  .ml-5 {
    margin-left: ${3 * spacer}px !important;
  }

  .mx-5 {
    margin-left: ${3 * spacer}px !important;
    margin-right: ${3 * spacer}px !important;
  }

  .my-5 {
    margin-top: ${3 * spacer}px !important;
    margin-bottom: ${3 * spacer}px !important;
  }

  .m-5 {
    margin-top: ${3 * spacer}px !important;
    margin-right: ${3 * spacer}px !important;
    margin-bottom: ${3 * spacer}px !important;
    margin-left: ${3 * spacer}px !important;
  }

  .mt-auto {
    margin-top: auto !important;
  }

  .mr-auto {
    margin-right: auto !important;
  }

  .mb-auto {
    margin-bottom: auto !important;
  }

  .ml-auto {
    margin-left: auto !important;
  }

  .mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .m-auto {
    margin-top: auto !important;
    margin-right: auto !important;
    margin-bottom: auto !important;
    margin-left: auto !important;
  }

  .pt-0 {
    padding-top: 0 !important;
  }

  .pr-0 {
    padding-right: 0 !important;
  }

  .pb-0 {
    padding-bottom: 0 !important;
  }

  .pl-0 {
    padding-left: 0 !important;
  }

  .px-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .p-0 {
    padding-top: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 0 !important;
    padding-left: 0 !important;
  }

  .pt-1 {
    padding-top: ${0.25 * spacer}px !important;
  }

  .pr-1 {
    padding-right: ${0.25 * spacer}px !important;
  }

  .pb-1 {
    padding-bottom: ${0.25 * spacer}px !important;
  }

  .pl-1 {
    padding-left: ${0.25 * spacer}px !important;
  }

  .px-1 {
    padding-left: ${0.25 * spacer}px !important;
    padding-right: ${0.25 * spacer}px !important;
  }

  .py-1 {
    padding-top: ${0.25 * spacer}px !important;
    padding-bottom: ${0.25 * spacer}px !important;
  }

  .p-1 {
    padding-top: ${0.25 * spacer}px !important;
    padding-right: ${0.25 * spacer}px !important;
    padding-bottom: ${0.25 * spacer}px !important;
    padding-left: ${0.25 * spacer}px !important;
  }

  .pt-2 {
    padding-top: ${0.5 * spacer}px !important;
  }

  .pr-2 {
    padding-right: ${0.5 * spacer}px !important;
  }

  .pb-2 {
    padding-bottom: ${0.5 * spacer}px !important;
  }

  .pl-2 {
    padding-left: ${0.5 * spacer}px !important;
  }

  .px-2 {
    padding-left: ${0.5 * spacer}px !important;
    padding-right: ${0.5 * spacer}px !important;
  }

  .py-2 {
    padding-top: ${0.5 * spacer}px !important;
    padding-bottom: ${0.5 * spacer}px !important;
  }

  .p-2 {
    padding-top: ${0.5 * spacer}px !important;
    padding-right: ${0.5 * spacer}px !important;
    padding-bottom: ${0.5 * spacer}px !important;
    padding-left: ${0.5 * spacer}px !important;
  }

  .pt-3 {
    padding-top: ${1 * spacer}px !important;
  }

  .pr-3 {
    padding-right: ${1 * spacer}px !important;
  }

  .pb-3 {
    padding-bottom: ${1 * spacer}px !important;
  }

  .pl-3 {
    padding-left: ${1 * spacer}px !important;
  }

  .px-3 {
    padding-left: ${1 * spacer}px !important;
    padding-right: ${1 * spacer}px !important;
  }

  .py-3 {
    padding-top: ${1 * spacer}px !important;
    padding-bottom: ${1 * spacer}px !important;
  }

  .p-3 {
    padding-top: ${1 * spacer}px !important;
    padding-right: ${1 * spacer}px !important;
    padding-bottom: ${1 * spacer}px !important;
    padding-left: ${1 * spacer}px !important;
  }

  .pt-4 {
    padding-top: ${1.5 * spacer}px !important;
  }

  .pr-4 {
    padding-right: ${1.5 * spacer}px !important;
  }

  .pb-4 {
    padding-bottom: ${1.5 * spacer}px !important;
  }

  .pl-4 {
    padding-left: ${1.5 * spacer}px !important;
  }

  .px-4 {
    padding-left: ${1.5 * spacer}px !important;
    padding-right: ${1.5 * spacer}px !important;
  }

  .py-4 {
    padding-top: ${1.5 * spacer}px !important;
    padding-bottom: ${1.5 * spacer}px !important;
  }

  .p-4 {
    padding-top: ${1.5 * spacer}px !important;
    padding-right: ${1.5 * spacer}px !important;
    padding-bottom: ${1.5 * spacer}px !important;
    padding-left: ${1.5 * spacer}px !important;
  }

  .pt-5 {
    padding-top: ${3 * spacer}px !important;
  }

  .pr-5 {
    padding-right: ${3 * spacer}px !important;
  }

  .pb-5 {
    padding-bottom: ${3 * spacer}px !important;
  }

  .pl-5 {
    padding-left: ${3 * spacer}px !important;
  }

  .px-5 {
    padding-left: ${3 * spacer}px !important;
    padding-right: ${3 * spacer}px !important;
  }

  .py-5 {
    padding-top: ${3 * spacer}px !important;
    padding-bottom: ${3 * spacer}px !important;
  }

  .p-5 {
    padding-top: ${3 * spacer}px !important;
    padding-right: ${3 * spacer}px !important;
    padding-bottom: ${3 * spacer}px !important;
    padding-left: ${3 * spacer}px !important;
  }

  .pt-auto {
    padding-top: auto !important;
  }

  .pr-auto {
    padding-right: auto !important;
  }

  .pb-auto {
    padding-bottom: auto !important;
  }

  .pl-auto {
    padding-left: auto !important;
  }

  .px-auto {
    padding-left: auto !important;
    padding-right: auto !important;
  }

  .py-auto {
    padding-top: auto !important;
    padding-bottom: auto !important;
  }

  .p-auto {
    padding-top: auto !important;
    padding-right: auto !important;
    padding-bottom: auto !important;
    padding-left: auto !important;
  }
`
