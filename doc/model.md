# Projectile Sampling Distributions - Model Description

Note: Please see Projectile Data Lab's `../projectile-data-lab/doc/model.md` for a detailed explanation of the
physical and statistical models shared between the two simulations.

## Overview

This simulation enables exploration of the statistical principles behind sampling distributions, sample size, and
standard error, through the backdrop of the familiar "projectile motion" context, with real-world data. The simulation 
introduces random initial conditions in the launch angle and speed, and shows the distribution of the resulting trajectory.
The data can be viewed in a sampling distribution histogram, and compared with other data sets with different sample sizes.

## Physical Model

In the absence of air resistance, the simulation ensures that the projectiles follow perfect parabolic paths, allowing
for analytical computation. The motion of these projectiles is characterized by their launch angle (`theta`), 
initial velocity (`v_0`), and the time they spend airborne. The equations governing this motion are:

- For vertical motion: `y = v_0 * sin(theta) * t - 1/2 * g * t^2`
- For horizontal motion: `x = v_0 * cos(theta) * t`

where `g` represents the acceleration due to gravity, and `t` denotes time. where \(g\) represents the acceleration due
to gravity, and \(t\) denotes time.

The projectiles have an initial height of 0 meters, and a mean launch angle of 30 degrees.

Through interactive exploration, users gain insights into how variables such as launch speed and angle affect projectile
motion. The simulation's tools facilitate both visual and numerical analyses, enhancing the understanding of how
randomness and variability play crucial roles in physical phenomena.

## Statistical Model

The simulation employs normal distributions to determine the launch speed and launch angle of each projectile. These values
are generated from independent distributions, each with mean and standard deviation that depend on the properties of the 
launcher. See [Launchers](#launchers) section for more details.

When a sample is complete, its mean distance is recorded and displayed in the sampling distribution histogram. The histogram
shows the distribution of sample means, allowing users to observe the central limit theorem in action. By comparing
the sampling distribution histograms of different sample sizes, users can explore the concept of standard error and how
it relates to sample size.

## Launchers

Each launcher is defined by its `launch mechanism` as well as its `angle stability`. The launch mechanism determines the
distribution of launch speeds, while the angle stability determines the variability of the launch angle. The launch mechanism
can be one of the following:

* **Spring**: The launch speeds are normally distributed with a mean of 23 m/s and a standard deviation of 0.5 m/s.
* **Pressure**: The launch speeds are normally distributed with a mean of 24 m/s and a standard deviation of 0.2 m/s.
* **Explosion**: The launch speeds are normally distributed with a mean of 25 m/s and a standard deviation of 1.2 m/s.
* **Custom Mechanisms 1-3**: The launch speed mean and standard deviation are user-defined.

The `angle stability` value inversely correlates to the standard deviation of the launch angle. An `angle stability` value 
of 0 corresponds to the maximum angle standard deviation, while a value of 1 corresponds to the minimum angle standard deviation.