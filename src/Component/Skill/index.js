import React, {useEffect} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillContainer = styled.div`
  padding: 1rem;

  p:first-child {
    text-align: left;
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`;

const SkillContent = styled.div`
  .txt_area {
    width: 900px;
    margin: 0 auto 20px;
    padding-bottom: 300px;
    h3 {
      margin-bottom: 115px;
    }
    .history {
      background: url(${process.env.PUBLIC_URL}/image/skillHistory.png) 50% 0 no-repeat;
      height: 689px;
      position: relative;
      dl {
        position: absolute;
        top: -6px;
        width: 430px;
        dt {
          position: absolute;
          top: 0;
          font-weight: bold;
          font-size: 2.78rem;
        }
        dd {
          position: relative;
          top: 5rem;
          right: 5rem;
          font-size: 1.21rem;
          line-height: 1.64em;
        }
      }
      .history_l {
        left: -16px;
        dt {
          right: 0;
        }
        dd {
          position: relative;
          top: 5rem;
          left: 5rem;
          margin-right: 120px;
          text-align: left;
        }
      }
      .history_r {
        right: -20px;
        dt {
          left: 0;
        }
        dd {
          margin-left: 120px;
        }
      }

      .history2018 {
        top: 166px;
        width: 363px;
        left: 47px;
      }
      .history2017 {
        top: 334px;
      }
      .history2015 {
        top: 500px;
      }
      .history2014 {
        top: 674px;
      }
    }
  }
`;

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <SkillContainer>
      <SkillContent className="content3" id="sitemap1-2">
        <h1>Skill</h1>
        <div className="txt_area">
          <div className="history">
            <dl className="history_r history2019" data-aos="fade-left">
              <dt>Language</dt>
              <dd>&middot; Java</dd>
            </dl>

            <dl className="history_l history2018" data-aos="fade-right">
              <dt>WEB</dt>
              <dd>&middot; JavaScript(ES6+) </dd>
              <dd>&middot; React</dd>
              <dd>(Hooks, Redux, Saga)</dd>
              <dd>&middot; Ajax, Axios </dd>
              <dd>&middot; jQuery </dd>
              <dd>&middot; Type Script </dd>
            </dl>

            <dl className="history_r history2017" data-aos="fade-left">
              <dt>FrameWork</dt>
              <dd>&middot; Spring </dd>
              <dd>&middot; MyBatis</dd>
              <dd>&middot; React Bootstrap</dd>
              <dd>&middot; Next.js</dd>
              <dd />
            </dl>

            <dl className="history_l history2015" data-aos="fade-right">
              <dt>DataBase</dt>
              <dd>Oracle &middot;</dd>
              <dd>MySQL &middot;</dd>
            </dl>

            <dl className="history_r history2014" data-aos="fade-left">
              <dt>Version Control</dt>
              <dd>&middot; Google Drive</dd>
              <dd>&middot; Git</dd>
            </dl>
          </div>
        </div>
      </SkillContent>
    </SkillContainer>
  );
};

export default Skill;
