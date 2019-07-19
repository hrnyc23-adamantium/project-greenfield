import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

let QAForum = props => {
  return (
    <div>
      <ul>
        {props.qaResultsArr
          .sort((a, b) =>
            a.helpfulness < b.helpfulness
              ? 1
              : b.helpfulness < a.helpfulness
              ? -1
              : 0
          )
          .map((result, i) => {
            return (
              <React.Fragment key={Math.random()}>
                <span
                  key={Math.random()}
                  style={{
                    fontSize: "large",
                    padding: "0px 0px 0px 55px"
                  }}
                >
                  Q: {result.question_body}
                </span>

                <span
                  style={{
                    fontSize: "small",
                    float: "right",
                    textDecoration: "underline"
                  }}
                >
                  Add Answer
                </span>

                <span
                  style={{
                    fontSize: "small",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    float: "right"
                  }}
                >
                  |
                </span>

                <span style={{ fontSize: "small", float: "right" }}>
                  {" "}
                  ({result.question_helpfulness}){" "}
                </span>
                <span
                  style={{
                    fontSize: "small",
                    float: "right",
                    textDecoration: "underline"
                  }}
                >
                  {" "}
                  Yes{" "}
                </span>
                <span style={{ fontSize: "small", float: "right" }}>
                  {" "}
                  helpful?{" "}
                </span>

                <ul>
                  {Object.values(result.answers)
                    .sort((a, b) =>
                      a.helpfulness < b.helpfulness
                        ? 1
                        : b.helpfulness < a.helpfulness
                        ? -1
                        : 0
                    )
                    .slice(0, result.answerLimit)
                    .map(answer => {
                      return (
                        <List key={Math.random()}>
                          <ListItem alignItems="flex-start" key={Math.random()}>
                            <p key={Math.random()}>A: {answer.body}</p>
                          </ListItem>
                          <ListItem key={Math.random()}>
                            <span
                              key={Math.random()}
                              style={{
                                fontSize: "small",
                                spanadding: "0px 0px 0px 0px"
                              }}
                            >
                              by: {answer.answerer_name} | date:{" "}
                              {answer.date.split("T")[0]} | Helpful?
                            </span>
                            <span
                              style={{
                                fontSize: "small",
                                textDecoration: "underline"
                              }}
                            >
                              Yes
                            </span>
                            <span
                              style={{
                                fontSize: "small",
                                spanadding: "0px 0px 0px 0px"
                              }}
                            >
                              ({answer.helpfulness})
                            </span>
                            <span
                              style={{
                                fontSize: "small",
                                paddingLeft: "20px",
                                paddingRight: "20px"
                              }}
                            >
                              |
                            </span>
                            <span
                              style={{
                                fontSize: "small",
                                textDecoration: "underline"
                              }}
                            >
                              Report
                            </span>
                          </ListItem>
                          <ListItem key={Math.random()}>
                            {answer.photos.map(photo => {
                              return (
                                <img
                                  onClick={() => {
                                    console.log("need to add modal");
                                  }}
                                  src={photo}
                                  width="100"
                                  height="60"
                                  key={Math.random()}
                                />
                              );
                            })}
                          </ListItem>
                          <Divider />
                        </List>
                      );
                    })}
                </ul>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    props.QAAddAnswers(i);
                  }}
                >
                  load more answers
                </Button>
              </React.Fragment>
            );
          })}
      </ul>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          if (props.qaCount < props.qa.results.length) {
            props.QAIncrementer(1);
            props.QAChangeResultsArr(props.qaCount);
          }
        }}
      >
        More Answered Questions
      </Button>
    </div>
  );
};

export default QAForum;
