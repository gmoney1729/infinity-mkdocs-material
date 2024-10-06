# Traverse Wizard: Processing Parameters

### Traverse Wizard: Processing Parameters

Configure the traverse processing parameters for the current processing run.

![Image](./data/icons/note.gif)

On how to configure the default parameters, refer to Traverse Processing Parameters.

Methods: Compass Rule, Transit Rule:

**Methods: Compass Rule, Transit Rule:**

| 1. | Select the Adjustment Method by which the traverse shall be adjusted. By default the Compass Rule is selected. |
| --- | --- |
| 2. | Define the Standard Error per Angle and Distance that shall be used as the coefficients to calculate the Max. Angular and the Max. Length Errors. By default these values are set to 15'' and 0.01m. |
| 3. | Depending on the required level of accuracy adapt the Min. 2D Accuracy, as in, the minimum required position accuracy. By default this value is set to be 1/10'000. |
| 4. | Define the Max. allowed Height Error per Traverse Point. By default this value is set to be 0.01m. |
| 5. | Depending on the required level of accuracy adapt the Min. 1D Accuracy, as in, the minimum required height accuracy. By default this value is set to be 1/10'000. |
| 6. | Define the maximum allowed Station Difference before and after Adjustment. By default these values are set to be 0.01m for Easting, Northing and Height. |
| 7. | Select to compute the misclosure, traverse length and accuracies to the end FS.Select the desired point to compute the misclosure to. An angular misclosure cannot be computed or distributed when this option is selected. The misclosure is computed to the end station, if this option is unselected. |
| 8. | Select to apply curvature and refraction correction to the observations. |
| 9. | Select to use forward only observations. Forward and backward observations are measured for each traverse leg, if this option is unselected. |
| 10. | Select Next to proceed with Test Criteria. |

**Next**

![Image](./data/icons/note.gif)

If you deselect any of the tolerance checks or the maximum station difference check, then these checks are not applied in the traverse calculation. By default all checks are switched on.

Method: Least Squares:

**Method: Least Squares:**

| 1. | Select the Adjustment Method by which the traverse shall be adjusted. In this case, select Least Squares. |
| --- | --- |
| 2. | Define the Adjustment Dimension. By default this is set to 3D. |
| 3. | To define the settings refer to the adjustment help topics:General Adjustment Settings Test Criteria Advanced Terrestrial Parameters |
| 4. | Select Next to proceed with Traverse Wizard: Traverse Result. |

**Least Squares**

- General Adjustment Settings
- Test Criteria
- Advanced Terrestrial Parameters

**Next**

![Image](./data/icons/note.gif)

GNSS settings and level settings in the adjustment help are not applicable to the traverse wizard.

