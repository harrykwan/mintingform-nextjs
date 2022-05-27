import { useState } from "react";

export default function Question(props) {
  const [customtable1array, setCustomtable1array] = useState([
    <>
      <div className="col-9">
        <input type="text" name="name" className="form-control required" />
      </div>
      <div className="col-3">
        <input type="number" name="name" className="form-control required" />
      </div>
    </>,
  ]);

  function appendtable1() {
    setCustomtable1array([
      ...customtable1array,
      <>
        <div className="col-9">
          <input type="text" name="name" className="form-control required" />
        </div>
        <div className="col-3">
          <input type="number" name="name" className="form-control required" />
        </div>
      </>,
    ]);

    console.log(customtable1array);
  }

  if (props.type == "checkbox") {
    return (
      <>
        <div>
          <h3 className="main_question">
            <i className="arrow_right" />
            {props.title}
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
        </div>
      </>
    );
  } else if (props.type == "radio") {
    return (
      <>
        <div>
          <h3 className="main_question">
            <i className="arrow_right" />
            {props.title}
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
      </>
    );
  } else if (props.type == "lq") {
    return (
      <>
        <div>
          <div className="form-group add_bottom_30">
            <label htmlFor="name">{props.title}</label>
            <div style={{ fontSize: "12px", opacity: "0.7" }}>
              {props.description}
            </div>
            {props.photourl && (
              <img
                className="mt-2 mb-2"
                style={{ width: "100%" }}
                src={props.photourl}
              />
            )}
            <textarea
              type="text"
              name="name"
              className="form-control required"
            ></textarea>
          </div>
        </div>
      </>
    );
  } else if (props.type == "customtable1") {
    return (
      <>
        <div>
          <div className="form-group add_bottom_30">
            <label htmlFor="name">{props.title}</label>
            <div style={{ fontSize: "12px", opacity: "0.7" }}>
              {props.description}
            </div>

            {customtable1array.map((item, index) => (
              <div key={index} className="row mt-2">
                {item}
              </div>
            ))}

            <button
              className="customaddbutton mt-3"
              type="button"
              onClick={appendtable1}
            >
              +
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <div className="form-group add_bottom_30">
            <label htmlFor="name">{props.title}</label>
            <div style={{ fontSize: "12px", opacity: "0.7" }}>
              {props.description}
            </div>
            {props.photourl && (
              <img
                className="mt-2 mb-2"
                style={{ width: "100%" }}
                src={props.photourl}
              />
            )}
            <input
              type={props.inputtype ? props.inputtype : "text"}
              name="name"
              className="form-control required"
            />
          </div>
        </div>
      </>
    );
  }
}
