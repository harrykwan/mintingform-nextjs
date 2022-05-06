import Head from 'next/head'
import Script from 'next/Script'
import Image from 'next/image'

import NavButton from '../components/navButton.js'
import Question from '../components/question.js'
import TopBar from '../components/topBar.js'

import { useState } from 'react'

export default function Home() {
  const questions = [{ type: '', body: '', choice: '' }, {}, {}]

  const [pagenum, setpagenum] = useState(0)

  function prevpage() {
    if (pagenum > 0) {
      setpagenum(pagenum - 1)
    }
  }

  function nextpage() {
    if (pagenum < questions.length) {
      setpagenum(pagenum + 1)
    }
  }

  function submit() {
    console.log('submit')
  }

  return (
    <div>
      <TopBar />
      <main>
        <div className="container-fluid ">
          <div className="customprogressbar_outside ">
            <div
              className="customprogressbar_inside"
              style={{
                width: ((pagenum + 1) / questions.length) * 100 + '%',
              }}
            ></div>
          </div>
          <div id="form_container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div id="wizard_container">
                  <form id="wrapped">
                    <div id="middle-wizard">
                      <Question type="radio" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <NavButton
        pagenum={pagenum}
        prevpage={prevpage}
        nextpage={nextpage}
        maxpagenum={questions.length - 1}
      />
    </div>
  )
}
