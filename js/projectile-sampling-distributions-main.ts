// Copyright 2024, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author matthew-blackman
 */

import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import ProjectileSamplingDistributionsScreen from './projectile-sampling-distributions/ProjectileSamplingDistributionsScreen.js';
import ProjectileSamplingDistributionsStrings from './ProjectileSamplingDistributionsStrings.js';
import './common/ProjectileSamplingDistributionsQueryParameters.js';

// Launch the sim. Beware that scenery Image nodes created outside simLauncher.launch() will have zero bounds
// until the images are fully loaded. See https://github.com/phetsims/coulombs-law/issues/70#issuecomment-429037461
simLauncher.launch( () => {

  const titleStringProperty = ProjectileSamplingDistributionsStrings[ 'projectile-sampling-distributions' ].titleStringProperty;

  const screens = [
    new ProjectileSamplingDistributionsScreen( { tandem: Tandem.ROOT.createTandem( 'projectileSamplingDistributionsScreen' ) } )
  ];

  const options: SimOptions = {

    //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
    credits: {
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      contributors: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
  };

  const sim = new Sim( titleStringProperty, screens, options );
  sim.start();
} );