# Traverse Wizard: Calculate Traverse

### Traverse Wizard: Calculate Traverse

Before the traverse is adjusted you are shown its accuracy before adjustment. If you select to distribute the angular misclosure (equally or by distance), the angle distributed misclosure is shown.

You see:

**You see:**

- Its computed total length.
- Its computed 1D and 2D accuracies. If the tolerance values defined in step 3 are exceeded a warning    is issued.
- Its length and direction of error. This corresponds to the vector resulting from the computed length and cross errors.
- Its computed start azimuth. You can force a different value to be taken when you select **Use Start Azimuth** and enter a different azimuth value. By default this setting is switched off.
- Its computed scale.
- The misclosure point.
- Its computed coordinate misclosures. In the components where the max. allowed station differences as defined in Step 3 are exceeded a warning    is issued.
- Its computed end azimuth. You can force a different value to be taken when you select **Use End Azimuth** and enter a different azimuth value. By default this setting is switched off.

![Image](graphics/00468303.jpg)

![Image](graphics/00468303.jpg)

Select a method for misclosure distribution:

**Select a method for misclosure distribution:**

| Angular misclosure: |
| --- |
| 1. | The maximum allowed angular error, as computed according to the number of stations and the standard error per angle defined in Step 3, is compared with the calculated angular error. If the maximum allowed error is exceeded a warning    is issued. |
| 2. | Choose the method how the angular misclosure shall be distributed.If you select Equally, the angular misclosure is divided by the number of traverse angles and the same correction is applied to each setup.If you select By Distance, the angular misclosure is distributed with respect to the length of the traverse legs. The shorter a traverse leg is, the bigger the correction is.If you select No Distribution, the angular misclosure is not distributed to the traverse angles. |
| 3. | The misclosure values that are shown on this page are determined with the angular misclosure method that is selected. Any coordinate misclosure distribution performed through the compass rule or transit rule are based on these values. |
| Length misclosure: |
| 4. | The maximum allowed length error, as computed according to the total traverse length and the standard error per distance defined in Step 3, is compared with the calculated length error. If the maximum allowed error is exceeded a warning    is issued. |
| Height misclosure: |
| 5. | The maximum allowed height error per traverse point, as defined in Step 3, is compared with the calculated height error. If the maximum allowed error is exceeded a warning    is issued. |
| 6. | Choose the method how the height misclosure shall be distributed.If you select Equally the height misclosure is divided by the number of stations and the same correction is applied to each station height.If you select By Distance the height misclosure is distributed with respect to the length of the traverse legs. The longer a traverse leg is, the bigger the correction is.If you select No Distribution the height misclosure is not distributed to the station heights. |
| 7. | Select Next to proceed with the Traverse Wizard: Traverse Result. |

**Angular misclosure:**

![Image](graphics/00468303.jpg)

- If you select **Equally**, the angular misclosure is divided by the number of traverse angles and the same correction is applied to each setup.
- If you select **By Distance**, the angular misclosure is distributed with respect to the length of the traverse legs. The shorter a traverse leg is, the bigger the correction is.
- If you select **No Distribution**, the angular misclosure is not distributed to the traverse angles.

**Length misclosure:**

![Image](graphics/00468303.jpg)

**Height misclosure:**

![Image](graphics/00468303.jpg)

- If you select **Equally** the height misclosure is divided by the number of stations and the same correction is applied to each station height.
- If you select **By Distance** the height misclosure is distributed with respect to the length of the traverse legs. The longer a traverse leg is, the bigger the correction is.
- If you select **No Distribution** the height misclosure is not distributed to the station heights.

**Next**

![Image](./data/icons/note.gif)

The calculate traverse section of the traverse wizard is skipped when adjusting using the least squares method.

