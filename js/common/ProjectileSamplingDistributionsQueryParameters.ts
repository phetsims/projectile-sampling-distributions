// Copyright 2024-2025, University of Colorado Boulder

/**
 * Defines query parameters that are specific to this simulation.
 * Run with ?log to print query parameters and their values to the browser console at startup.
 *
 * @author matthew-blackman
 */

import logGlobal from '../../../phet-core/js/logGlobal.js';
import { QueryStringMachine } from '../../../query-string-machine/js/QueryStringMachineModule.js';
import projectileSamplingDistributions from '../projectileSamplingDistributions.js';

const ProjectileSamplingDistributionsQueryParameters = QueryStringMachine.getAll( {
  //TODO add schemas for query parameters, see https://github.com/phetsims/projectile-sampling-distributions/issues/2
} );

projectileSamplingDistributions.register( 'ProjectileSamplingDistributionsQueryParameters', ProjectileSamplingDistributionsQueryParameters );

// Log query parameters
logGlobal( 'phet.chipper.queryParameters' );
logGlobal( 'phet.preloads.phetio.queryParameters' );
logGlobal( 'phet.projectileSamplingDistributions.ProjectileSamplingDistributionsQueryParameters' );

export default ProjectileSamplingDistributionsQueryParameters;