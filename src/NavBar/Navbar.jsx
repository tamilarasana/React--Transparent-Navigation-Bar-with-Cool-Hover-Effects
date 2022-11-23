import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav>
          <div className="brand">
            <h2>OnlineTutorails</h2>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <section>
          <div className="sec1"></div>
          <div className="sec2">
            <h1>Lorem ipsum dolor sit, amet consectetur </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus assumenda distinctio laudantium? Libero reiciendis
              corrupti harum voluptate labore dolor commodi temporibus,
              necessitatibus blanditiis excepturi est, possimus repellendus enim
              nisi soluta in! Eum excepturi officiis beatae ab, vitae voluptatum
              vel voluptas ipsum sequi rem perferendis minus tenetur maxime
              magnam eos aliquid eaque asperiores, dicta unde. Ex incidunt quis
              sequi esse architecto totam earum velit laboriosam rem quo quos
              assumenda nesciunt sapiente dignissimos, nisi odit sit labore
              pariatur quibusdam. Voluptas, a eum eos, cupiditate, sequi quod
              quo assumenda illo praesentium corporis sunt quas veniam libero
              doloremque necessitatibus rem dignissimos consectetur
              exercitationem adipisci!
            </p>
            <h1>Lorem ipsum dolor sit, amet consectetur </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus assumenda distinctio laudantium? Libero reiciendis
              corrupti harum voluptate labore dolor commodi temporibus,
              necessitatibus blanditiis excepturi est, possimus repellendus enim
              nisi soluta in! Eum excepturi officiis beatae ab, vitae voluptatum
              vel voluptas ipsum sequi rem perferendis minus tenetur maxime
              magnam eos aliquid eaque asperiores, dicta unde. Ex incidunt quis
              sequi esse architecto totam earum velit laboriosam rem quo quos
              assumenda nesciunt sapiente dignissimos, nisi odit sit labore
              pariatur quibusdam. Voluptas, a eum eos, cupiditate, sequi quod
              quo assumenda illo praesentium corporis sunt quas veniam libero
              doloremque necessitatibus rem dignissimos consectetur
              exercitationem adipisci!
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default Navbar;
