import React from "react";
import Social from "../../Social";

const ModalThree = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/news/3.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* END IMAGE */}
      <div className="news_details">
        <span>
          April 07,2021 <a href="#">Inspiration</a>
        </span>
        <h3 className="title">Chul Urina</h3>
      </div>
      {/* End details */}
      <div className="main_content">
        <div className="descriptions">
          <p>
            Just because we can't get out and about like we normally would,
            doesn’t mean we have to stop taking pictures. There’s still plenty
            you can do, provided you're prepared to use some imagination. Here
            are a few ideas to keep you shooting until normal life resumes.
          </p>
          <p>
            Most photographers love to shoot the unusual, and you don’t get much
            more unusual than These Unprecedented Times. Right now everything
            counts as out of the ordinary. There are a number of remarkable
            things about these lockdown days that are worth photographing now so
            we can remember them when it is all over.
          </p>
          <p>
            Streets empty that are usually busy are remarkable and can evoke the
            sense of historical pictures from before the invention of the
            motorcar. Other things that are different at the moment will be
            queues to get into stores and the lines marked out on the floor to
            show how far apart we should be.
          </p>
          <div className="quotebox">
            <p>
              Most photographers find it hard to see interesting pictures in
              places in which they are most familiar. A trip somewhere new seems
              always exactly what our photography needed, as shooting away from
              home consistently inspires us to new artistic heights.
            </p>
          </div>
          <p>
            Pretend everything is new and that you haven’t seen it before, and
            then you will be free to notice the leading lines, the places where
            one edge meets another in delightful geometric harmony, and how the
            ordinary things in the kitchen are transformed when the light is on
            or off.
          </p>
          <p>
            The trick here is to look slowly, and then look again. Take the time
            to look in detail and to look at the same thing from different
            angles, with different light, long lenses and wide lenses. Then move
            to the left a bit. You may never feel the need to leave the house
            again.
          </p>
        </div>
        {/* END DESCRIPTION */}
        <div className="news_share">
          <span>Share:</span>
          <Social />
          {/* END SOCIAL SHARE */}
        </div>
      </div>
    </div>
  );
};

export default ModalThree;
