# Traverse Processing Parameters

### Traverse Processing Parameters

In the file tab, under info & settings you can define the traverse processing parameters that shall be used by default when a new traverse is calculated in Infinity.

See also:

**See also:**

Info & Settings

Default Traverse Adjustment Parameters

**Default Traverse Adjustment Parameters**

Adjustment method:

**Adjustment method:**

Choose the method of how the coordinate misclosure (Easting, Northing) shall be distributed.

- If you select **Compass Rule**, the coordinate misclosure is distributed relating to the length of the traverse legs. The **Compass Rule** assumes that the biggest error comes from the longest traverse observations. This method is suitable when the precision of the angles and distances are approximately equal.
- If you select **Transit Rule**, the coordinate misclosure is distributed relating to the coordinate changes in Easting and Northing. Use this method if the angles were measured with a higher precision than the distances.
- If you select **No Adjustment**, the coordinate misclosures are not distributed to the station coordinates.
- If you select **2D Helmert**, the traverse is adjusted with a **2D Helmert** transformation. Shift, rotation and scale factor is computed and applied to the traverse.
- If you select **Least Squares**, the traverse is adjusted with a constrained 2D or 3D least squares adjustment.

![Image](./data/icons/note.gif)

The compass rule is also known as the Bowditch method.

![Image](./data/icons/note.gif)

Control coordinates have to be stored for the start and end point in the traverse if you want to calculate and distribute the coordinate misclosure by either the compass rule or the transit rule.

Methods: Compass Rule, Transit Rule

**Methods: Compass Rule, Transit Rule**

Angle Balance

**Angle Balance**

Choose the method of how the angular misclosure shall be distributed.

- If you select **Equally**, the angular misclosure is divided by the number of traverse angles and the same correction is applied to each setup.
- If you select **By Distance**, the angular misclosure is distributed relating to the length of the traverse legs. The shorter a traverse leg is, the bigger the correction is.
- If you select **No Distribution**, the angular misclosure is not distributed to the traverse angles.
- The misclosure values that are computed are determined with the angular misclosure method that is selected. Any coordinate misclosure distribution performed through the compass rule or transit rule are based on these values.

Height Balance

**Height Balance**

Choose the method of how the height misclosure shall be distributed.

- If you select **Equally**, the height misclosure is divided by the number of stations and the same correction is applied to each station height.
- If you select **By Distance**, the height misclosure is distributed relating to the length of the traverse legs. The longer a traverse leg is, the bigger the correction is.
- If you select **No Distribution**, the height misclosure is not distributed to the station heights.

Apply scale to observations

**Apply scale to observations**

Select this setting, if you want to apply the scale factor resulting from the traverse computation to all setups that make up the traverse. For each setup, all observations are scaled with this value.

![Image](./data/icons/note.gif)

When you recompute the same traverse then the scale is 1.0 or very close to it.

![Image](./data/icons/note.gif)

To remove the scale select the    option, under Station Scale in the Traverse Properties window.

![Image](graphics/00466559.jpg)

If you delete the traverse the scale is also deleted from the setups and observations to which it has been applied.

Tolerance Checks in Traverse Wizard

**Tolerance Checks in Traverse Wizard**

Observation Review

**Observation Review**

Residuals Hz/V

**Residuals Hz/V**

Specify a limit for the value that the residuals of your angular observations are allowed to take. When the residuals exceed this limit then the observations are marked with a    in the Observation Review of the New Traverse wizard.

![Image](graphics/00468303.jpg)

Residuals Slope Distance

**Residuals Slope Distance**

Specify a limit for the value that the residuals of your slope distance measurements are allowed to take. When the residuals exceed this limit then the measurements are marked with a    in the Observation Review of the New Traverse wizard.

![Image](graphics/00468303.jpg)

Distance Difference

**Distance Difference**

Specify a limit for the difference that shall be allowed between distances measured as a foresight and a backsight between two traverse stations.

Δ Height Difference

**Δ Height Difference**

Specify a limit for the difference that shall be allowed between height differences measured as a foresight and a backsight between two traverse stations.

Processing Parameters - Compass Rule, Transit Rule

**Processing Parameters - Compass Rule, Transit Rule**

Use max. 2D error

**Use max. 2D error**

Max. Angular Error:

**Max. Angular Error:**

The tolerance for the angular error is defined as F = k*sqrt(n), with k being the constant value that you have to enter as the Standard Error per Angle (the default value is 15'') and n being the number of traverse points (angles). If the calculated angular error exceeds the Max. Angular Error, the angular misclosure is marked with a    in the calculate traverse step of the traverse wizard.

**F = k*sqrt(n)**

**k**

**n**

![Image](graphics/00468303.jpg)

Max. Length Error:

**Max. Length Error:**

The tolerance for the length error is defined as F = k*sqrt(L), with k being the constant value that you have to enter as the Standard Error per Distance (the default value is 0.010m) and L being the total length of the traverse. If the calculated length error exceeds the Max. Length Error, the length misclosure is marked with a    in the calculate traverse step of the traverse wizard.

**F = k*sqrt(L)**

**k**

**L**

![Image](graphics/00468303.jpg)

![Image](./data/icons/note.gif)

If you choose to adjust the traverse by a 2D Helmert transformation it is not necessary to define a maximum length error and a maximum cross error. The corresponding functionality is not available. The scale factor is automatically applied as part of the transformation.

Min. 2D Accuracy:

**Min. 2D Accuracy:**

The accuracy in position is achieved by dividing the calculated length of error by the total traverse length, with the length of error being the length of the vector resulting from taking the length and the cross error into account. The minimum position accuracy that should be achieved is defined as 1 divided by a user-defined value. By default this value is set to be 10'000. If the achieved accuracy is bigger than the defined fraction value then the Min. 2D Accuracy is marked with a    as exceeded.

![Image](graphics/00468303.jpg)

Use max. 1D error

**Use max. 1D error**

Max. Height Error per Traverse Point:

**Max. Height Error per Traverse Point:**

Define the tolerance for the height misclosure. If the calculated height misclosure divided by the number of stations exceeds the Max. Height Error per Station, the height misclosure is marked with a    in the calculate traverse step of the traverse wizard.

![Image](graphics/00468303.jpg)

Min. 1D Accuracy:

**Min. 1D Accuracy:**

The accuracy in height is achieved by dividing the calculated height error by the total traverse length. The minimum height accuracy that should be achieved is defined as 1 divided by a user-defined value. By default this value is set to be 10'000. If the achieved accuracy is bigger than the defined fraction value then the Min. 1D Accuracy is marked with a    as exceeded.

![Image](graphics/00468303.jpg)

Station Difference before and after Adjustment

**Station Difference before and after Adjustment**

Use station difference

**Use station difference**

Max. Station Difference before and after Adjustment:

**Max. Station Difference before and after Adjustment:**

Define the maximum difference that shall be allowed between measured and adjusted station coordinates. If the adjusted station coordinates differ by more than the defined values from the measured coordinates then the coordinate misclosure is marked with a    in the calculate traverse step of the traverse wizard.

![Image](graphics/00468303.jpg)

![Image](./data/icons/note.gif)

If you deselect any of the tolerance checks or the max. station difference check, then these checks are by default not applied in the new traverse wizard. But you can always select or deselect single checks while calculating a traverse in the wizard independent of the default settings.

Processing Parameters - Least squares method

**Processing Parameters - Least squares method**

Refer to the following adjustment help topics:

**Refer to the following adjustment help topics:**

- General Adjustment Settings
- Test Criteria
- Advanced Terrestrial Parameters

Least squares method - Processing considerations:

**Least squares method - Processing considerations:**

- GNSS settings and Level settings in the adjustment help topics are not applicable to the traverse wizard.
- The least squares method does not perform a transformation. If this is required, you can apply a transformation through the Shift, Rotate, Scale wizard.
- Flagged observations in the observation review section of the traverse wizard are a good early indicator of a failing F-test.
- Flagged W-test observations can be removed from the observation review.

