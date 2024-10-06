# Image Processing Report

### Image Processing Report

To create a report for the orientation, select the orientation result and select Reports > Image Orientation Report from the Imaging ribbon bar or the context menu.

**Reports**

**Image Orientation Report**

Project Details

**Project Details**

This section includes information about the project, such as the project name, the customer details and the master coordinate system.

Image Group Information

**Image Group Information**

This section includes information about the selected image group:

- The ID.
- The total number of images and their resolution.
- The sensor and the camera model.
- The EXIF focal length.
- The total size of the images in Gpx.

Orientation Settings

**Orientation Settings**

This section includes information on the settings that were used to compute the orientation of the images. The settings are described in detail in Image Processing Settings.

The check point tolerances are the manually entered values used to assess the quality of the check points.

Interior Orientation

**Interior Orientation**

This section includes information on the parameters of the interior orientation.

Calibration Source:

**Calibration Source:**

- **Pre-Calibrated**: The initial values for the parameters are imported to the project, for example from Leica Aibot.
- **User Entered**: The initial values for the parameters are manually edited.
- **Unknown**: The initial values for the parameters were computed using information from the EXIF image metadata.
- **Computed**: The initial values for the parameters were computed in a previous step by self-calibration.

The initial value, the calibrated value and their differences are shown for each parameter of the camera and the lens of the Image group. Normally, the differences are expected to be small, but there is no limitation. Yet, a large difference may indicate instability of the self-calibration or the orientation. In most cases, this issue can be addressed by adding control points as explained in Marking of Control Points.

Exterior Orientation

**Exterior Orientation**

This section includes information about the exterior orientation of the images.

If control points have been used, the information shown here reflects the absolute position of the images. Otherwise, the information is shown with respect to the relative position of the images.

General Information

**General Information**

General statistics for the exterior orientation are shown in this subsection.

- Check the **Minimum Number of Tie Points Per Image**: If this value is zero, there is at least one image that has not been orientated, due to a not optimal acquisition. For example blurry images, not optimal camera network or flight height.

Absolute Camera Pose Standard Deviations

**Absolute Camera Pose Standard Deviations**

This table shows the mean and the standard deviation of the mean, for the standard deviations of the camera poses. Depending on the initial orientation estimates, these values are more or less close to zero. A value that is bigger from the rest or from zero, indicates a possible bias of this parameter. In most cases, this can be fixed by adding control points to the orientation.

Control Points

**Control Points**

This table shows the residuals in each direction, the mean reprojection errors and the total number of images each control point has been marked on. The mean reprojection errors are checked with the nMAD (normalised Median Absolute Deviation) criteria. Possible outliers are marked as out-of-tolerance.

- If there are flagged values, review the markings of the specific control points.

The mean and the standard deviation are computed for each column. These values are more or less close to zero. A value that is bigger from the rest or from zero, indicates a possible bias.

In this case:

**In this case:**

- Check that the control points that are used have a good distribution.
- Check that the control points have been correctly marked on at least four images.
- Check that there is no typing error in the coordinates of the control points.

More information on control points can be found in Image Processing Settings.

Check Points

**Check Points**

This table shows the residuals in each direction, the mean reprojection errors and the total number of images each check point has been marked on. The mean reprojection errors are checked with the nMAD criteria. The Δ values, the mean and the computed RMSE are checked against the tolerances defined in the image processing settings. Possible outliers are marked as out-of-tolerance.

- If there are flagged values, review the markings and the coordinates of the specific check points.

More information on control points can be found in Image Processing Settings.

