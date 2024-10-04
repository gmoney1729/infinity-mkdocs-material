# Advanced Terrestrial Parameters

### Advanced Terrestrial Parameters

![Image](./data/icons/note.gif)

The parameters for adjustment computations can either be set in the File tab under Info & Settings or from inside the Adjustments ribbon bar.

Changes are stored with the project and applied to all future adjustment runs.

To set the adjustment parameters back to the default values:

**To set the adjustment parameters back to the default values:**

Go to the File tab and select the Defaults option in the    Adjustment Parameters section under Info & Settings.

**File**

**Defaults**

![Image](graphics/00467453.jpg)

**Adjustment Parameters**

**Info & Settings**

Use reduced observations:

**Use reduced observations:**

When calculating a network adjustment by default all active observations are used. Select    this option, if you want to only use the reduced observations for all sets of angles applications stored in a project. The single observations contained in the sets of angles are then not taken into account.

![Image](graphics/00468738.jpg)

The standard deviations for the reduced observations are taken from the sets of angles calculation, that is, the mean error of the averaged observations.

Use vertical refraction coefficient:

**Use vertical refraction coefficient:**

- Select **Ignore**, if you want to apply a vertical refraction coefficient to zenith angles individually before feeding the data into the adjustment.
- Select **Compute**, if you want to estimate the vertical refraction coefficient. This is used in projects which have many zenith angle measurements and thus a good estimate can be obtained.
- Select **Use**, if you want to apply the above set default value to all zenith angles.

![Image](./data/icons/note.gif)

As the vertical refraction coefficient is applied to all vertical angle measurements in the network, it should only be used in networks that cover relatively small areas.

Vertical Refraction Coefficient

**Vertical Refraction Coefficient**

The vertical refraction coefficient accounts for the influence of refraction on zenith angles. The default is set to a typical value of 0.13.

Use scale factor correction:

**Use scale factor correction:**

- Select **Ignore**, if you want to apply a scale factor to distances individually before feeding the data into the adjustment.
- Select **Compute**, if you want to estimate the scale factor. This is used in projects which have many distance measurements and thus a good estimate can be obtained.
- Select **Use**, if you want to apply the above set default value to all distances.

Scale Factor Correction

**Scale Factor Correction**

Here you can define the scale factor, that shall be applied to distance measurements as an extra factor used to compensate for atmospheric conditions.

