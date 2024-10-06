# Level Line Details

### Level Line Details

The level lines are shown from the inspector in a booking sheet format.

Level Line Details

**Level Line Details**

| Level Line Details | Description |
| --- | --- |
| Point ID | The measured point ID. |
| Type | The type indicates what sort of data the booking sheet line refers to - Backsight, intermediate or foresight measurements. |
| BS | The Backsight Staff (BS) reading. Depending on the observation method you have one or two backsights for one instrument setup.The starting BS measurement for a level line is always a library point and can be edited. |
| IS | The Intermediate Staff (IS) readings. These are the points not part of the level line where a height value should be measured. Intermediate points are staff setups which are not part of the line but included in the line processing.The IS measurements are always library points and can be renamed. |
| FS | The Foresight Staff (FS) reading. Depending on the observation method, you have one or two foresights for one instrument setup.FS measurements are not library points by default. |
| Rise | When the BS - FS is positive. |
| Fall | When the BS - FS is negative. |
| Hz Dist | Distance between the level instrument and staff 1/2. Ideally the distances should be the same to cancel errors due to curvature and refraction. |
| Azimuth | For some XML imported level data there can exist preliminary coordinates and azimuth directions from the level stations to the BS-FS. |
| Easting | If the Easting has been recorded it can be displayed in the booking sheet. |
| Northing | If the Northing has been recorded it can be displayed in the booking sheet. |
| Height | The height of a point as calculated in relation to the start height. Control heights are fixed, while measured heights are updated when a level line is processed. |
| SD | This column shows the Standard Deviation (SD) of an observation recorded in repeat single, mean, mean+s or median measure mode. To edit one or more SD highlight one or more staff reading and select Edit Standard Deviations from the context menu. |
| Mean SD | The Mean Standard Deviation (Mean SD) is the mean of all the standard deviations calculated in the level line up to that point. It can be used for finding the average variation in the measurements, rather than the variation for each observation. |
| Measurements | Is the number of measurements taken by the instrument for that observation. This is displayed for measurement modes repeat single, mean, mean+s and median. |
| Spread | The spread is the difference between the highest and lowest observations in repeat single, mean, mean+s or median measure modes. |
| Mode | The measure mode indicates how the observations were taken. Most levels have single, repeat single, mean, mean+s and median measure modes. |
| Diff BS1-BS2 | For BF sequence measurements the difference between the first and second backsights is recorded. Ideally the difference should be 0. |
| Diff FS1-FS2 | For BF sequence measurements the difference between the first and second foresights is recorded. Ideally the difference should be 0. |
| Station Diff | The Station Difference (Station Diff) is used for BFFB (and aBFFB) sequence measurements. It is the sum of the differences in the backsights and foresights. |
| Total Station Diff | The Total Station Difference (Total Station Diff) is a running total of the station differences for every station in the level line up until that point. |
| Dist Balance | The distance balance is the difference between the distance to the backsight point and the foresight point. |
| Total Dist Balance | The total station difference is a running total of the station differences for every station in the level line up until that point. |
| Earth Curv Corr | Indicates whether the Earth Curvature Correction (Earth Curv Corr) has been applied to the observations. |
| Expansion Coefficient | The expansion coefficient is the value used when applying staff corrections during line processing. This value varies depending on the type of staff used. |
| Calibration Temperature | This is the temperature that the staff was calibrated. |
| Temperature | The temperature during measurement is the T value in the formula. Enter the actual temperature determined while you were observing the level line to be processed. |

**Edit Standard Deviations**

