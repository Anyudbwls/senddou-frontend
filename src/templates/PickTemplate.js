import Intro from './introduce/Intro';

import Project from './project/Project';

import Military from './military/Military';
import MilitaryMe from './military/MilitaryMe';
import MilitaryMe1 from './military/MilitaryMe1';

import Skill from './skill/Skill';
import SkillMe from './skill/SkillMe';
import SkillMe1 from './skill/SkillMe1';
import SkillMe2 from './skill/SkillMe2';


import Career from './career/Career';
import Career1 from './career/Career1';
import Career2 from './career/Career2';
import Career3 from './career/Career3';
import Career4 from './career/Career4';

import IntroduceMe from './introduce/IntroduceMe';

import Competition from './Competition/Competition';
import Competition1 from './Competition/Competition1';
import Competition2 from './Competition/Competition2';
import Competition3 from './Competition/Competition3';
import Competition4 from './Competition/Competition4';
import Competition5 from './Competition/Competition5';

import Education from './education/Education';
import Education1 from './education/Education1';
import Education2 from './education/Education2';
import Education3 from './education/Education3';
import Education4 from './education/Education4';
import Education5 from './education/Education5';

export function PickTemplate({ type, name, data, display}) {
  console.log("pickTemplate")
  console.log(type, name, display)
  console.log(data);
  const template = {
    intro: {
      intro: <Intro data={data} display={display}/>,
      introduceMe: <IntroduceMe data={data} display={display}/>,
    },
    project: {
      project: <Project data={data} display={display}/>,
    },
    military: {
      military: <Military data={data} display={display}/>,
      militaryMe: <MilitaryMe data={data} display={display}/>,
      militaryMe1: <MilitaryMe1 data={data} display={display}/>,
    },
    career: {
      career: <Career data={data} display={display}/>,
      career1: <Career1 data={data} display={display}/>,
      career2: <Career2 data={data} display={display}/>,
      career3: <Career3 data={data} display={display}/>,
      career4: <Career4 data={data} display={display}/>,
    },
    competition:{
      competition:<Competition data={data} display={display}/>,
      competition1:<Competition1 data={data} display={display}/>,
      competition2:<Competition2 data={data} display={display}/>,
      competition3:<Competition3 data={data} display={display}/>,
      competition4:<Competition4 data={data} display={display}/>,
      competition5:<Competition5 data={data} display={display}/>
    },
    education: {
      education: <Education data={data} display={display}/>,
      education1: <Education1 data={data} display={display}/>,
      education2: <Education2 data={data} display={display}/>,
      education3: <Education3 data={data} display={display}/>,
      education4: <Education4 data={data} display={display}/>,
      education5: <Education5 data={data} display={display}/>
    },
    skill: {
      skill: <Skill data={data} display={display}/>,
      skillMe: <SkillMe data={data} display={display}/>,
      skillMe1: <SkillMe1 data={data} display={display}/>,
      skillMe2: <SkillMe2 data={data} display={display}/>,
    },
  };

  template[type]?.[name] || console.log("this is not valid", type, name)

  return template[type]?.[name] || <div className="text-center">NOT FOUND</div>;
}