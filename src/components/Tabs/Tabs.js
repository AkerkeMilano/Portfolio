import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Tabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab label="Main Skills" {...a11yProps(0)} />
          <Tab label="Experience" {...a11yProps(1)} />
          <Tab label="Education" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ul className="education-list">
          <li>
            <span>Front-end</span>
            <br></br> HTML, CSS/SASS, JavaScript, TypeScript, RESTful API,
            Redux, Redux Thunk, React
          </li>
          <li>
            <span>Tools</span>
            <br></br> Visual Studio Code, Node modules, Firebase, Github
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul className="education-list">
          <li>
            <span>Software Engineer</span> - Digital Product School, Munich,
            Germany <br></br> May - July 2022 <br></br> Participating in a
            3-month training program in a team with product manager, interaction
            designer and software engineers. Working to develop digitalized web
            applications for Bavarian State Ministry of Digital Affairs. Tech
            stack: HTML, CSS, JavaScript, React.js, SpringBoot, Postgres.
          </li>
          <li>
            <span>Front-end Dev Intern</span> - DAR, Almaty, Kazakhstan{" "}
            <br></br> March - May 2022 <br></br> Took part in a 3-month
            internship for frontend developers. Learned styling, hooks, axios
            requests in React and completed Event Manager project in cooperation
            with frontend and backend interns. I worked on displaying the
            events, watching the event details, liking/disliking the events and
            commenting the events. Learned how to work in GitHub, especially how
            to resolve conflicts. Tech stack: HTML, CSS, Typescript, React.ts.
          </li>
          <li>
            <span>Junior Researcher</span> - Skoltech, Moscow, Russia <br></br>{" "}
            2019 -2021
            <br></br>Development of cognitive tests with eye tracking systems
            (Matlab), conduction of experiments with EEG device, data analysis
            of eye tracking results obtained in the experiments using machine
            learning techniques (Python). Supervisor: Professor Anh Huy Phan.
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ul className="education-list">
          <li>
            <span>FullStack Javascript Developer</span> - Attractor School,
            Almaty, Kazakhstan <br></br> Oct 2021 - Current
          </li>
          <li>
            <span>MSc in Space and Engineering Systems</span> - Skoltech,
            Moscow, Russia <br></br> 2019
          </li>
          <li>
            <span>BEng in Electrical and Electronics</span> - Nazarbayev
            University, Nur-Sultan, Kazakhstan <br></br> 2017
          </li>
        </ul>
      </TabPanel>
    </Box>
  );
}
