// Copyright 2024, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author matthew-blackman
 */

import Screen, { ScreenOptions } from '../../../joist/js/Screen.js';
import optionize from '../../../phet-core/js/optionize.js';
import ProjectileSamplingDistributionsColors from '../common/ProjectileSamplingDistributionsColors.js';
import projectileSamplingDistributions from '../projectileSamplingDistributions.js';
import ProjectileSamplingDistributionsModel from './model/ProjectileSamplingDistributionsModel.js';
import ProjectileSamplingDistributionsScreenView from './view/ProjectileSamplingDistributionsScreenView.js';
import ProjectileSamplingDistributionsStrings from '../ProjectileSamplingDistributionsStrings.js';

type SelfOptions = {
  //TODO add options that are specific to ProjectileSamplingDistributionsScreen here
};

type ProjectileSamplingDistributionsScreenOptions = SelfOptions & ScreenOptions;

export default class ProjectileSamplingDistributionsScreen extends Screen<ProjectileSamplingDistributionsModel, ProjectileSamplingDistributionsScreenView> {

  public constructor( providedOptions: ProjectileSamplingDistributionsScreenOptions ) {

    const options = optionize<ProjectileSamplingDistributionsScreenOptions, SelfOptions, ScreenOptions>()( {
      name: ProjectileSamplingDistributionsStrings.screen.nameStringProperty,

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenOptions here
      backgroundColorProperty: ProjectileSamplingDistributionsColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new ProjectileSamplingDistributionsModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new ProjectileSamplingDistributionsScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

projectileSamplingDistributions.register( 'ProjectileSamplingDistributionsScreen', ProjectileSamplingDistributionsScreen );