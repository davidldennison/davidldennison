import React from "react";

const ModalFour = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/5.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Lead Generation is the trending Part of Graphics</h3>
        <p>
          Just because we can't get out and about like we normally would,
          doesn’t mean we have to taking pictures. There’s still plenty you can
          do, provided you're prepared to use some imagination. Here are a few
          ideas to keep you shooting until normal life resumes.
        </p>
        <p>
          Most photographers love to shoot the unusual, and you don’t get much
          more unusual than These Unprecedented Times. Right now everything
          counts as out of the ordinary. There are a number of remarkable things
          about these lockdown days that are worth photographing now we can
          remember them when it is all over.
        </p>
        <h3>What Is Branding?</h3>
        <p>
          Nullam blandit constituto eam ne, te nam ignota vituper.atoribus.
          Malis cetero quem saipe, prou thendrerit voluptaria.
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>Email is a crucial channel in any marketing.</p>
            </li>
            <li>
              <p>Curious what to say? How to say it?</p>
            </li>
            <li>
              <p>Whether you’re kicking off a new ca mpaign.</p>
            </li>
            <li>
              <p>Habitasse per feugiat aliquam luctus accumsan curae</p>
            </li>
          </ul>
        </div>
        <p>
          Streets empty that are usually busy are remarkable and can evoke the
          sense of historical pictures from before the invention of the
          motorcar. Other things that are different at the moment will be queues
          to get into stores and the lines marked out on the floor to show how
          far apart we should be.
        </p>
      </div>
    </div>
  );
};

export default ModalFour;
