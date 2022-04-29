import React from "react";
import styled from "styled-components";

const Main = () => {
  const Top = styled.h2`
    margin: 1em;
    text-align: center;
  `;
  const Container = styled.div`
    margin: 2em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `;

  const GridItem = styled.div`
    gap: 10px;
    padding: 10px;
    background-color: #333;
  `;

  const KidsCafe = styled.div`
    padding: 5px;
    & > div:nth-child(1) {
      width: 100%;
      max-height: 300px;
      & > img {
        width: 100%;
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        float: left;
      }
      & > div:nth-child(2) {
        float: right;
      }
    }
  `;

  return (
    <>
      <form action="http://localhost:4000/createuser" method="post">
        ID : <input type="text" name="userid" />
        <br />
        PWD : <input type="password" name="userpassword" />
        <br />
        <input type="submit" value="Create account" />
      </form>
      <form action="http://localhost:4000/login" method="post">
        ID : <input type="text" name="userid" />
        <br />
        PWD : <input type="password" name="userpassword" />
        <br />
        <input type="submit" value="login" />
      </form>
      <Top>TOP Kids Cafe</Top>
      <Container>
        <GridItem>
          <KidsCafe>
            <div>
              <img
                src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210701_121%2F16251064786612I588_JPEG%2F8fXt92n37zkb_a5bUs16uP7T.jpg"
                alt="testImage"
              />
            </div>
            <div>
              <div>Title</div>
              <div>star</div>
            </div>
          </KidsCafe>
        </GridItem>
        <GridItem>
          <KidsCafe>
            <div>
              <img
                src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210701_121%2F16251064786612I588_JPEG%2F8fXt92n37zkb_a5bUs16uP7T.jpg"
                alt="testImage"
              />
            </div>
            <div>
              <div>Title</div>
              <div>star</div>
            </div>
          </KidsCafe>
        </GridItem>
        <GridItem>
          <KidsCafe>
            <div>
              <img
                src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210701_121%2F16251064786612I588_JPEG%2F8fXt92n37zkb_a5bUs16uP7T.jpg"
                alt="testImage"
              />
            </div>
            <div>
              <div>Title</div>
              <div>star</div>
            </div>
          </KidsCafe>
        </GridItem>
        <GridItem>
          <KidsCafe>
            <div>
              <img
                src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210701_121%2F16251064786612I588_JPEG%2F8fXt92n37zkb_a5bUs16uP7T.jpg"
                alt="testImage"
              />
            </div>
            <div>
              <div>Title</div>
              <div>star</div>
            </div>
          </KidsCafe>
        </GridItem>
        <GridItem>
          <KidsCafe>
            <div>
              <img
                src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210701_121%2F16251064786612I588_JPEG%2F8fXt92n37zkb_a5bUs16uP7T.jpg"
                alt="testImage"
              />
            </div>
            <div>
              <div>Title</div>
              <div>star</div>
            </div>
          </KidsCafe>
        </GridItem>
        <GridItem>
          <KidsCafe>
            <div>
              <img
                src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210701_121%2F16251064786612I588_JPEG%2F8fXt92n37zkb_a5bUs16uP7T.jpg"
                alt="testImage"
              />
            </div>
            <div>
              <div>Title</div>
              <div>star</div>
            </div>
          </KidsCafe>
        </GridItem>
      </Container>
    </>
  );
};

export default Main;
