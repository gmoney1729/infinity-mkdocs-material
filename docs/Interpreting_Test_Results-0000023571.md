# Interpreting Test Results

### Interpreting Test Results

When dealing with test results we always have to keep in mind that a certain amount of probability is involved in the process, and that there is no absolute truth. Statistics in general should be used with discretion, together with common sense, practical experience and external independent evidence.

As discussed in the topic on the F-Test a rejection of the F-Test, meaning a rejection of H0, may happen because of:

**As discussed in the topic on the F-Test a rejection of the F-Test, meaning a rejection of H0, may happen because of:**

- Gross errors or blunders.
- An incorrect mathematical model.
- An incorrect stochastic model.

Needless to say, a combination of these reasons for a rejection is also possible, which makes it difficult to define strict rules for drawing conclusions from the F-Test results. In general, a rejected F-Test in combination with a pattern of rejected W-Tests points to a model error. An incidental W-Test rejection points to one or more gross errors or blunders.

Since F-Test, W-Test and T-Test are interlinked, it is best to interpret all tests in combination:

**Since F-Test, W-Test and T-Test are interlinked, it is best to interpret all tests in combination:**

- A rejected F-Test in combination with a limited number of rejected W-Tests (T-Tests) usually points to one or more gross errors.
- If the F-Test is rejected and all observations of a specific type (for example all zenith angles) are rejected as well, the problem probably lies within the mathematical model which needs correction or refinement then. For instance, if all W-Tests for the zenith angles are rejected, it could be helpful to include refraction coefficients.
- If the F-Test is rejected together with most of the W-Test results (without extremes), the problem probably lies within the stochastic model and you can suspect that the input standard deviations are too optimistic. On the other hand, if the F-Test result is well below the critical value and the W-Test (T-Test) results are all close to zero, then the input standard deviations are possibly too pessimistic.

Example:

**Example:**

Suppose that the data snooping on the observations in your network results in a (limited) number of rejections. Further assume that the rejections are not caused by mathematical model errors and that obvious errors such as typing mistakes have been fixed.

Then this leaves you with a number of options:

**Then this leaves you with a number of options:**

- **Remove the corresponding observations**This is a valid but rather abrupt way of handling rejections. Remember that the removal of observations decreases the redundancy and, therefore, influences precision and reliability.
- **Remeasure the corresponding observations**Remeasuring observations is an obvious but often expensive way to eliminate rejections, especially when the fieldwork is already completed. Thus, it is recommended to process and cross-check as much of the data as possible on site.
- **Increase the standard deviation of the corresponding observations**Increasing the standard deviation of an observation always works, because it always results in decreasing the F-, W-, T-Test values. Keep in mind, though, that the goal is not to get all tests accepted, but rather to detect blunders or model errors!
- **Ignore the rejections**This option is obviously very risky and should only be applied if the W-Test results just exceed the critical value. Have a look at the estimated error coming with the rejection and see whether it is acceptable or not, because we also have to keep in mind that, depending on the level of significance, it may always happen that a valid observation is rejected.

![Image](./data/icons/note.gif)

Unless there is clear evidence of the reason for an error, for example a typing error, never edit observations just to make it better fit into your network!

