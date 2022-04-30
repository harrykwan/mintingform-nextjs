export default function Question() {
  return (
    <>
      <div className="step" hidden>
        <h3 className="main_question">
          <i className="arrow_right" />
          Please fill with your personal data
        </h3>
        <div className="form-group add_top_30">
          <label htmlFor="name">First and Last Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control required"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control required"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="form-control required"
          />
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 col-4">
            <label htmlFor="age">Age</label>
            <div className="form-group radio_input">
              <input
                type="text"
                name="age"
                id="age"
                className="form-control required"
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 col-8">
            <div className="form-group radio_input">
              <label className="container_radio mr-3">
                Male
                <input
                  type="radio"
                  name="gender"
                  defaultValue="Male"
                  className="required"
                />
                <span className="checkmark" />
              </label>
              <label className="container_radio">
                Female
                <input
                  type="radio"
                  name="gender"
                  defaultValue="Female"
                  className="required"
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="step" hidden>
        <h3 className="main_question">
          <i className="arrow_right" />
          Have you recently been in contact with a person with Coronavirus?
        </h3>
        <div className="form-group">
          <label className="container_radio version_2">
            Yes
            <input
              type="radio"
              name="question_2"
              defaultValue="Yes"
              className="required"
            />
            <span className="checkmark" />
          </label>
          <label className="container_radio version_2">
            No
            <input
              type="radio"
              name="question_2"
              defaultValue="No"
              className="required"
            />
            <span className="checkmark" />
          </label>
        </div>
      </div>

      <div className="step">
        <h3 className="main_question">
          <i className="arrow_right" />
          Have you traveled to any one of the destinations below in the last 21
          days?
        </h3>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label className="container_check version_2">
                China
                <input
                  type="checkbox"
                  name="question_1[]"
                  defaultValue="China"
                  className="required"
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="form-group">
              <label className="container_check version_2">
                South Korea
                <input
                  type="checkbox"
                  name="question_1[]"
                  defaultValue="South Korea"
                  className="required"
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="form-group">
              <label className="container_check version_2">
                Iran
                <input
                  type="checkbox"
                  name="question_1[]"
                  defaultValue="Iran"
                  className="required"
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label className="container_check version_2">
                Europe
                <input
                  type="checkbox"
                  name="question_1[]"
                  defaultValue="Europe"
                  className="required"
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="form-group">
              <label className="container_check version_2">
                US States
                <input
                  type="checkbox"
                  name="question_1[]"
                  defaultValue="US States"
                  className="required"
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="form-group">
              <label className="container_check version_2">
                None of the above
                <input
                  type="checkbox"
                  name="question_1[]"
                  defaultValue="Mobile Design"
                  className="required"
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>
        {/* /row */}
      </div>
    </>
  )
}
