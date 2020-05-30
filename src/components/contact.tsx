import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faSkype, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export const Contact: React.FC = () => {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2> Yaniv Mendiuk</h2>
          <img
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{ height: "250px" }}
          />
          <p style={{ width: "40%", margin: "auto", paddingTop: "1em" }}>
            My name is Yaniv I am a self developer. I have been studying through
            udemy and other sites, made projects and so on...{" "}
          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />

          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "25px",
                    fontFamily: "Oxygen",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ paddingRight: "2rem", marginRight: "40px" }}
                    icon={faMailBulk}
                    size="2x"
                  />
                  yanivmendiuk@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "25px",
                    fontFamily: "Oxygen",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ paddingRight: "2rem", marginRight: "50px" }}
                    icon={faSkype}
                    size="2x"
                  />
                  Skype Id: Yaniv.Mendiuk
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "25px",
                    fontFamily: "Oxygen",
                  }}
                >
                  <FontAwesomeIcon
                    style={{ paddingRight: "2rem", marginRight: "50px" }}
                    icon={faLinkedinIn}
                    size="2x"
                  />
                  LinkedIn name: Yaniv Mendiuk
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};
