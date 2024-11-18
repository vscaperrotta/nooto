/**
 *
 * About
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './About.module.scss';

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About</h1>
      <p>Lorem ipsum ...</p>

      <button
        onClick={() => navigate({ pathname: '/' })}
      >
        Torna alle note
      </button>
    </div>
  )
}

About.propTypes = {};

export default About;
