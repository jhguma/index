import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillContainer = styled.div`
  padding: 1rem;

  span:first-child {
    color: #4863a0;
  }
`;

const SkillContent = styled.div`
  // Mobile 화면단 반응형 고려
  .txt_area {
    max-width: 900px;
    margin: 0 auto 20px;
    padding-bottom: 300px;

    .skill {
      background: url(${process.env.PUBLIC_URL}/image/skillHistory.png) 50% 0 no-repeat;
      height: 689px;
      width: 100%;
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
      .skill_l {
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
      .skill_r {
        right: -20px;
        dt {
          left: 0;
        }
        dd {
          margin-left: 120px;
        }
      }

      .skill-web {
        top: 166px;
        width: 363px;
        left: 47px;
      }
      .skill-framework {
        top: 334px;
      }
      .skill-database {
        top: 500px;
        width: 363px;
        left: 47px;
      }
      .skill-version {
        top: 674px;
      }
    }
  }
`;

const Skill = props => {
  const {resize} = props;
  console.log(resize);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <SkillContainer>
      <SkillContent className="content3" id="sitemap1-2">
        <h1>
          <span>S</span>kill
        </h1>
        <div className="txt_area">
          <div className="skill">
            <dl className="skill_r history2019" data-aos="fade-left">
              <dt>Language</dt>
              <dd>&middot; Java</dd>
            </dl>

            <dl className="skill_l skill-web" data-aos="fade-right">
              <dt>WEB</dt>
              <dd>&middot; JavaScript(ES6+) </dd>
              <dd>&middot; React</dd>
              <dd>(Hooks, Redux, Saga)</dd>
              <dd>&middot; Ajax, Axios </dd>
              <dd>&middot; jQuery </dd>
              <dd>&middot; Type Script </dd>
            </dl>

            <dl className="skill_r skill-framework" data-aos="fade-left">
              <dt>FrameWork</dt>
              <dd>&middot; Spring </dd>
              <dd>&middot; MyBatis</dd>
              <dd>&middot; React Bootstrap</dd>
              <dd>&middot; Next.js</dd>
              <dd />
            </dl>

            <dl className="skill_l skill-database" data-aos="fade-right">
              <dt>DataBase</dt>
              <dd>&middot; Oracle</dd>
              <dd>&middot; MySQL</dd>
            </dl>

            <dl className="skill_r skill-version" data-aos="fade-left">
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

Skill.propTypes = {
  resize: PropTypes.number,
};

Skill.defaultProps = {
  resize: 1004,
};
export default Skill;
