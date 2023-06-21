---
import Navigation from '../components/Navigation.astro';
import BaseLayout from '../layouts/BaseLayout.astro';
 
import '../styles/global.css';
import Footer from '../components/Footer.astro';
const pageTitle = "About Me";

const identity = {
  firstName: "Sarah",
  country: "Canada",
  occupation: "Technical Writer",
  hobbies: ["photography", "birdwatching", "baseball"],
};
const skillColor = "navy";

const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
const happy = true;
const finished = false;
const goal = 3;
---


<BaseLayout pageTitle="{pageTitle}">
  <p>
    I am working through Astro's introductory tutorial. This is the second page
    on my website, and it's the first one I built myself!
  </p>
  <p>
    This site will update as I complete more of the tutorial, so keep checking
    back and see how my journey is going!
  </p>
  <p>Here are a few facts about me:</p>
  <ul>
    <li>My name is {identity.firstName}.</li>
    <li>
      I live in {identity.country} and I work as a {identity.occupation}.
    </li>
    {identity.hobbies.length >= 2 && (
      <li>
        Two of my hobbies are: {identity.hobbies[0]} and {identity.hobbies[1]}
      </li>
    )}
  </ul>
  <p>My skills are:</p>
  <ul>
    {skills.map((skill) => (
      <li class="skill">{skill}</li>
    ))}
  </ul>
  {happy && <p>I am happy to be learning Astro!</p>}{' '}
  {finished && <p>I finished this tutorial!</p>}{' '}
  {goal === 3 ? (
    <p>My goal is to finish in 3 days.</p>
  ) : (
    <p>My goal is not 3 days.</p>
  )}
</BaseLayout>;
