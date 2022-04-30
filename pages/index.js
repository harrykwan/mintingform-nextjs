import Head from 'next/head'
import Script from 'next/Script'
import Image from 'next/image'

import NavButton from '../components/navButton.js'
import Question from '../components/question.js'
import TopBar from '../components/topBar.js'

export default function Home() {
  return (
    <div>
      <TopBar />
      <main>
        <div className="container-fluid ">
          <div className="customprogressbar_outside ">
            <div
              className="customprogressbar_inside"
              style={{
                width: '50%',
              }}
            ></div>
          </div>
          <div id="form_container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div id="wizard_container">
                  <form id="wrapped">
                    <div id="middle-wizard">
                      <Question />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <NavButton />
    </div>
  )
}
