import { useState } from "react";

const customtable1template = function (
  customonchange,
  targetarray,
  targetarrayname,
  index
) {
  console.log(index);
  function appendtotargetarray(name, value) {
    let temptargetarray = targetarray;
    temptargetarray[index] = temptargetarray[index]
      ? temptargetarray[index]
      : {
          walletid: "",
          percentage: "",
        };
    temptargetarray[index][name] = value;
    customonchange(targetarrayname, temptargetarray);
  }

  if (targetarray) {
    if (!targetarray[index]) {
      targetarray[index] = {
        walletid: "",
        percentage: "",
      };
    }
    console.log(JSON.stringify(targetarray[index]));
    return (
      <>
        <div className="col-9">
          <input
            type="text"
            value={targetarray[index].walletid}
            name={targetarrayname + "_" + index}
            onChange={(e) => appendtotargetarray("walletid", e.target.value)}
            placeholder="wallet id (0x.....)"
            className="form-control required"
          />
        </div>
        <div className="col-3">
          <input
            placeholder="1-100"
            value={targetarray[index].percentage}
            name={targetarrayname + "_" + index}
            onChange={(e) => appendtotargetarray("percentage", e.target.value)}
            type="number"
            className="form-control required"
          />
        </div>
      </>
    );
  } else return <></>;
};

const customtable2template = (
  <>
    <div className="col-7">
      <input type="text" placeholder="Name" className="form-control required" />
    </div>
    <div className="col-5">
      <input
        type="text"
        placeholder="Position"
        className="form-control required"
      />
    </div>
  </>
);

export default function Question(props) {
  const [customtable1array, setCustomtable1array] = useState([
    customtable1template(
      props.customonchange,
      props.targetarray,
      props.targetarrayname,
      0
    ),
  ]);

  const [customtable2array, setCustomtable2array] = useState([
    customtable2template,
  ]);

  function appendtable1() {
    setCustomtable1array([
      ...customtable1array,
      customtable1template(
        props.customonchange,
        props.targetarray,
        props.targetarrayname,
        2
      ),
    ]);
  }

  function appendtable2() {
    setCustomtable2array([...customtable2array, customtable2template]);
  }

  if (props.type == "checkbox") {
    return (
      <>
        <div>
          <label htmlFor="name">
            {props.required && <i className="arrow_right" />}
            {props.title}
          </label>
          <div className="row mb-3">
            <div className="col-12">
              {props.checklistitems.map((item, index) => (
                <div key={index} className="form-group">
                  <label className="container_check version_2">
                    {item}
                    <input
                      type="checkbox"
                      defaultValue={item}
                      className="required"
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              ))}
              <input placeholder="Other" name="name" className="form-control" />
            </div>
          </div>
        </div>
      </>
    );
  } else if (props.type == "yesno") {
    return (
      <>
        <div>
          <label htmlFor="name">{props.title}</label>
          <div style={{ fontSize: "12px", opacity: "0.7" }}>
            {props.description}
          </div>
          <div className="form-group">
            <label className="container_radio version_2">
              是
              <input
                type="radio"
                defaultValue="Yes"
                name={"yesno_" + props.questionnum}
                className="required"
              />
              <span className="checkmark" />
            </label>
            <label className="container_radio version_2">
              否
              <input
                name={"yesno_" + props.questionnum}
                type="radio"
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
              value={props.customvalue}
              name={props.name}
              onChange={(e) => props.customonchange(props.name, e.target.value)}
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
  } else if (props.type == "customtable2") {
    return (
      <>
        <div>
          <div className="form-group add_bottom_30">
            <label htmlFor="name">{props.title}</label>
            <div style={{ fontSize: "12px", opacity: "0.7" }}>
              {props.description}
            </div>

            {customtable2array.map((item, index) => (
              <div key={index} className="row mt-2">
                {item}
              </div>
            ))}

            <button
              className="customaddbutton mt-3"
              type="button"
              onClick={appendtable2}
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
            <label htmlFor="name">
              {props.required && <i className="arrow_right" />}
              {props.title}
            </label>
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
              value={props.customvalue}
              name={props.name}
              onChange={(e) => props.customonchange(props.name, e.target.value)}
              className="form-control required"
            />
          </div>
        </div>
      </>
    );
  }
}
