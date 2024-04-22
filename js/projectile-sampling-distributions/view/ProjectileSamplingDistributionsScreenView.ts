// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author matthew-blackman
 */

import ScreenView, { ScreenViewOptions } from '../../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../../scenery-phet/js/buttons/ResetAllButton.js';
import ProjectileSamplingDistributionsConstants from '../../common/ProjectileSamplingDistributionsConstants.js';
import projectileSamplingDistributions from '../../projectileSamplingDistributions.js';
import ProjectileSamplingDistributionsModel from '../model/ProjectileSamplingDistributionsModel.js';
import optionize from '../../../../phet-core/js/optionize.js';

type SelfOptions = {
 //TODO add options that are specific to ProjectileSamplingDistributionsScreenView here
};

type ProjectileSamplingDistributionsScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class ProjectileSamplingDistributionsScreenView extends ScreenView {

  public constructor( model: ProjectileSamplingDistributionsModel, providedOptions: ProjectileSamplingDistributionsScreenViewOptions ) {

    const options = optionize<ProjectileSamplingDistributionsScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenViewOptions here
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - ProjectileSamplingDistributionsConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - ProjectileSamplingDistributionsConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //TODO
  }
}

projectileSamplingDistributions.register( 'ProjectileSamplingDistributionsScreenView', ProjectileSamplingDistributionsScreenView );