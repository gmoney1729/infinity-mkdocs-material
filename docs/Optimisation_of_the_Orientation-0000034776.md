# Optimisation of the Orientation

### Optimisation of the Orientation

Optimisation is the process of updating the exterior and/or interior orientation of images, by making changes to the control points or to the camera calibration values.

The initial stored orientation can be optimised so that:

**The initial stored orientation can be optimised so that:**

- Any wrong point marking is manually removed.
- Any control point with wrong 3D position is disabled.
- The camera calibration is fine-tuned to fit the specific image capture.

Since most cameras that are used do not retain a constant internal geometry, the camera optimisation can improve the accuracy of the interior and exterior orientation and its deliverables.

The orientation of an image group may take a considerable amount of time. However, the optimisation only triggers a final bundle adjustment, without recomputing the orientation from the beginning.

The optimisation of the orientation can be triggered:

**The optimisation of the orientation can be triggered:**

- By the control points wizard.
- By highlighting the oriented image group and selecting **Optimise** from the Imaging ribbon bar or use the context menu.

Optimisation using the control points wizard:

**Optimisation using the control points wizard:**

| 1. | After making a change in the control point wizard for an oriented image group, on the second page there is now an additional check box. |
| --- | --- |
| 2. | Activate the Update orientation on finish option to optimise the orientation. |
| 3. | Select Finish in the wizard to start a new processing task. The orientation is updated and optimised with the changes you made in the control point wizard. |

![Image](graphics/00548506.jpg)

**Update orientation on finish**

**Finish**

Optimisation of the camera parameters:

**Optimisation of the camera parameters:**

To fine-tune the interior orientation of the images, do the following:

**To fine-tune the interior orientation of the images, do the following:**

| 1. | Open the Settings from the Imaging ribbon bar and make the changes you want to the Camera Calibration Optimisation section. |
| --- | --- |
| 2. | Highlight the oriented image group and select Optimise from the Imaging ribbon bar or the context menu. |

**Settings**

**Optimise**

