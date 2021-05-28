import React, {useState} from "react";
// import { Modal, Button } from 'antd';

import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Portfolio = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
    console.log("Yaaaaay");
  };

  const handleCancel = () => {
    setVisible(true);
  };

  const showGithub = () => {
    setVisible(true);
  };

  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <>
        {/* <button onClick={showModal}>Testing Responsive</button> */}
        {/* <Button type="primary" onClick={showModal}>
          Show Page
        </Button> */}
        <Modal
          visible={visible}
          title="Title"
          // onOk={this.handleOk}
          // onCancel={this.handleCancel}
          // footer={[
          //   <Button key="back" /*onClick={this.handleCancel}*/>
          //     Return
          //   </Button>,
          //   <Button key="submit" type="primary" loading={loading} /*onClick={this.handleOk}*/>
          //     Submit
          //   </Button>,
          //   <Button
          //     key="link"
          //     href="https://google.com"
          //     type="primary"
          //     loading={loading}
          //     // onClick={handleOk}
          //   >
          //     Search on Google
          //   </Button>,
          // ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <div style={{height:"15rem", width: "30rem"}} onClick={showModal} key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            {/* <a target="_blank" rel="noopener noreferrer" href={projects.url} title={projects.title}> */}
              <img style={{border: "2px solid gray"}} alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                  <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:"2rem"}}>
                    <a target="_blank" rel="noopener noreferrer" href={projects.url}>
                      <button>Live</button>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={projects.github}>
                      <button  >Github</button>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="link-icon">
                <i className="fa fa-link"></i>
              </div> */}
            {/* </a> */}
          </div>
        </div>
        </>
      );
    });
  }

  return (
    <>
    {/* <button onClick={showModal}>Testing Responsive</button> */}
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works on React Js. I have mainly tried to build clones of softwares.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Portfolio;
