import React from 'react';
import styles from './style.scss';

export default class Information extends React.Component {
  render() {
    return(
      <div className={styles.information}>
        <p className={styles.about}>
        My name is Mathew Otto. I am a web developer located in Los Angeles, California. An all round web engineer with 9 years of commercial experience who is always looking to work on exciting projects. Full of energy, experience, hard work and enthusiasm.
        This is my little website where you’ll find a selection of my latest work & information that people might want to know about me.
        I'm available for freelance or full-time employment.
        </p>
        <p className={styles.skills}>
        Langauges

HTML • CSS • PHP • MySQL
Javascript • JQuery • Prototype
Coffee • Jade • Haml • Sass • Compass
Ruby • Rails • Python • Bash

Software
& Frameworks

Apache • Nginx • Lighttpd • IIS7
Zend • Code Igniter • Smarty
Subversion • GIT • JIRA • Trac • ANT
Photoshop • Illustrator • InDesign
        </p>
      </div>
    );
  }
}