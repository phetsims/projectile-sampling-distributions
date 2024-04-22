// Copyright 2024, University of Colorado Boulder

/**
 * Defines the colors for this sim.
 *
 * All simulations should have a Colors.js file, see https://github.com/phetsims/scenery-phet/issues/642.
 *
 * For static colors that are used in more than one place, add them here.
 *
 * For dynamic colors that can be controlled via colorProfileProperty.js, add instances of ProfileColorProperty here,
 * each of which is required to have a default color. Note that dynamic colors can be edited by running the sim from
 * phetmarks using the "Color Edit" mode.
 *
 * @author matthew-blackman
 */

import { ProfileColorProperty } from '../../../scenery/js/imports.js';
import projectileSamplingDistributions from '../projectileSamplingDistributions.js';

const ProjectileSamplingDistributionsColors = {

  // Background color for screens in this sim
  screenBackgroundColorProperty: new ProfileColorProperty( projectileSamplingDistributions, 'background', {
    default: 'white'
  } )
};

projectileSamplingDistributions.register( 'ProjectileSamplingDistributionsColors', ProjectileSamplingDistributionsColors );
export default ProjectileSamplingDistributionsColors;