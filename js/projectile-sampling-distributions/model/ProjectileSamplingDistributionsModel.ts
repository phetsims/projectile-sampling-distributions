// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author matthew-blackman
 */

import projectileSamplingDistributions from '../../projectileSamplingDistributions.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import TModel from '../../../../joist/js/TModel.js';

type SelfOptions = {
  //TODO add options that are specific to ProjectileSamplingDistributionsModel here
};

type ProjectileSamplingDistributionsModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class ProjectileSamplingDistributionsModel implements TModel {

  public constructor( providedOptions: ProjectileSamplingDistributionsModelOptions ) {
    //TODO
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO
  }
}

projectileSamplingDistributions.register( 'ProjectileSamplingDistributionsModel', ProjectileSamplingDistributionsModel );